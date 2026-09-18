/* =========================================================
   GENIQ SMART BACK NAVIGATION ENGINE
========================================================= */

(() => {
  "use strict";

  /*
   * -------------------------------------------------------
   * CONFIGURATION
   * -------------------------------------------------------
   */

  const CONFIG = {
    HISTORY_KEY: "__geniq_back_guard__",
    STATE_KEY: "__geniq_navigation_state__",
    EXIT_DELAY: 50
  };


  /*
   * -------------------------------------------------------
   * ELEMENTS
   * -------------------------------------------------------
   */

  const dialog = document.getElementById("geniqExitDialog");
  const stayBtn = document.getElementById("geniqStayBtn");
  const leaveBtn = document.getElementById("geniqLeaveBtn");

  if (!dialog || !stayBtn || !leaveBtn) {
    console.warn("GENIQ Back Guard: dialog elements not found.");
    return;
  }


  /*
   * -------------------------------------------------------
   * INTERNAL STATE
   * -------------------------------------------------------
   */

  let exitDialogOpen = false;
  let leavingApplication = false;
  let handlingPopState = false;

  let lastFocusedElement = null;


  /*
   * -------------------------------------------------------
   * CREATE A HISTORY GUARD
   * -------------------------------------------------------
   *
   * We add a synthetic history state.
   *
   * Android Back
   *      ↓
   * browser goes backward
   *      ↓
   * popstate fires
   *      ↓
   * GENIQ intercepts it
   */

  function createGuardState() {

    const currentState = history.state || {};

    if (
      currentState &&
      currentState[CONFIG.HISTORY_KEY] === true
    ) {
      return;
    }

    history.pushState(
      {
        ...currentState,
        [CONFIG.HISTORY_KEY]: true
      },
      "",
      location.href
    );
  }


  /*
   * -------------------------------------------------------
   * KEEP GUARD ALIVE
   * -------------------------------------------------------
   */

  function restoreGuard() {

    if (leavingApplication) {
      return;
    }

    const state = history.state || {};

    if (
      state[CONFIG.HISTORY_KEY] !== true
    ) {
      createGuardState();
    }
  }


  /*
   * -------------------------------------------------------
   * FIND OPEN UI
   * -------------------------------------------------------
   */

  function getOpenModal() {

    const selectors = [
      ".modal.active",
      ".modal.open",
      ".modal.show",
      "[role='dialog'].active",
      "[role='dialog'].open",
      ".overlay.active",
      ".drawer.open",
      ".sidebar.open",
      ".sidebar.active",
      ".sheet.open"
    ];

    for (const selector of selectors) {

      const element = document.querySelector(selector);

      if (
        element &&
        !element.classList.contains("geniq-exit-dialog")
      ) {
        return element;
      }
    }

    return null;
  }


  /*
   * -------------------------------------------------------
   * CLOSE OPEN UI
   * -------------------------------------------------------
   */

  function closeOpenUI() {

    const openUI = getOpenModal();

    if (!openUI) {
      return false;
    }

    /*
     * Try common close buttons first.
     */

    const closeButton =
      openUI.querySelector(
        "[data-close], " +
        ".close-btn, " +
        ".modal-close, " +
        ".drawer-close, " +
        ".sidebar-close, " +
        "[aria-label*='Close' i]"
      );

    if (closeButton) {
      closeButton.click();
      return true;
    }


    /*
     * Fallback:
     * remove common state classes.
     */

    [
      "active",
      "open",
      "show",
      "visible"
    ].forEach(cls => {
      openUI.classList.remove(cls);
    });

    return true;
  }


  /*
   * -------------------------------------------------------
   * CUSTOM APP NAVIGATION DETECTION
   * -------------------------------------------------------
   */

  function hasInternalNavigation() {

    /*
     * Generic hooks for GENIQ.
     *
     * If your app maintains one of these:
     *
     * currentView
     * currentPage
     * viewHistory
     * navigationHistory
     *
     * the guard can cooperate with it.
     */

    if (
      Array.isArray(window.navigationHistory) &&
      window.navigationHistory.length > 1
    ) {
      return true;
    }

    if (
      Array.isArray(window.viewHistory) &&
      window.viewHistory.length > 1
    ) {
      return true;
    }

    return false;
  }


  /*
   * -------------------------------------------------------
   * GO TO PREVIOUS GENIQ VIEW
   * -------------------------------------------------------
   */

  function goToPreviousView() {

    if (Array.isArray(window.navigationHistory)) {

      if (window.navigationHistory.length > 1) {

        window.navigationHistory.pop();

        const previous =
          window.navigationHistory[
            window.navigationHistory.length - 1
          ];

        if (
          typeof window.showView === "function"
        ) {
          window.showView(previous);
          return true;
        }

        if (
          typeof window.navigateTo === "function"
        ) {
          window.navigateTo(previous);
          return true;
        }
      }
    }


    if (Array.isArray(window.viewHistory)) {

      if (window.viewHistory.length > 1) {

        window.viewHistory.pop();

        const previous =
          window.viewHistory[
            window.viewHistory.length - 1
          ];

        if (
          typeof window.showView === "function"
        ) {
          window.showView(previous);
          return true;
        }

        if (
          typeof window.navigateTo === "function"
        ) {
          window.navigateTo(previous);
          return true;
        }
      }
    }

    return false;
  }


  /*
   * -------------------------------------------------------
   * OPEN EXIT DIALOG
   * -------------------------------------------------------
   */

  function openExitDialog() {

    if (exitDialogOpen) {
      return;
    }

    exitDialogOpen = true;

    lastFocusedElement =
      document.activeElement;

    dialog.classList.add("is-open");
    dialog.setAttribute("aria-hidden", "false");

    document.body.classList.add(
      "geniq-exit-lock"
    );

    /*
     * Focus Stay button for accessibility.
     */

    requestAnimationFrame(() => {
      stayBtn.focus();
    });
  }


  /*
   * -------------------------------------------------------
   * CLOSE EXIT DIALOG
   * -------------------------------------------------------
   */

  function closeExitDialog() {

    if (!exitDialogOpen) {
      return;
    }

    exitDialogOpen = false;

    dialog.classList.remove("is-open");
    dialog.setAttribute("aria-hidden", "true");

    document.body.classList.remove(
      "geniq-exit-lock"
    );

    /*
     * Restore focus.
     */

    if (
      lastFocusedElement &&
      typeof lastFocusedElement.focus === "function"
    ) {
      lastFocusedElement.focus();
    }

    lastFocusedElement = null;

    /*
     * Re-create the guard after canceling.
     */

    setTimeout(
      restoreGuard,
      CONFIG.EXIT_DELAY
    );
  }


  /*
   * -------------------------------------------------------
   * ACTUAL EXIT
   * -------------------------------------------------------
   */

  function leaveGENIQ() {

    if (leavingApplication) {
      return;
    }

    leavingApplication = true;

    closeExitDialog();

    /*
     * Remove our synthetic history state first.
     *
     * The user originally pressed Back.
     * Going back one more time continues
     * the browser's normal navigation.
     */

    setTimeout(() => {

      history.back();

    }, CONFIG.EXIT_DELAY);
  }


  /*
   * -------------------------------------------------------
   * BACK HANDLER
   * -------------------------------------------------------
   */

  function handleBack() {

    /*
     * Prevent recursive popstate handling.
     */

    if (handlingPopState) {
      return;
    }

    handlingPopState = true;

    try {

      /*
       * 1. If exit dialog is already open:
       *
       * Android Back = close dialog.
       */

      if (exitDialogOpen) {

        closeExitDialog();

        restoreGuard();

        return;
      }


      /*
       * 2. If another GENIQ modal/sidebar is open:
       *
       * Android Back = close it.
       */

      if (closeOpenUI()) {

        restoreGuard();

        return;
      }


      /*
       * 3. If GENIQ has its own internal navigation:
       *
       * Android Back = previous GENIQ screen.
       */

      if (hasInternalNavigation()) {

        if (goToPreviousView()) {

          restoreGuard();

          return;
        }
      }


      /*
       * 4. We are at the root/home state.
       *
       * Show exit confirmation.
       */

      restoreGuard();

      openExitDialog();

    } finally {

      setTimeout(() => {
        handlingPopState = false;
      }, 0);
    }
  }


  /*
   * -------------------------------------------------------
   * POPSTATE
   * -------------------------------------------------------
   */

  window.addEventListener(
    "popstate",
    handleBack,
    { passive: true }
  );


  /*
   * -------------------------------------------------------
   * STAY
   * -------------------------------------------------------
   */

  stayBtn.addEventListener(
    "click",
    closeExitDialog
  );


  /*
   * -------------------------------------------------------
   * EXIT
   * -------------------------------------------------------
   */

  leaveBtn.addEventListener(
    "click",
    leaveGENIQ
  );


  /*
   * -------------------------------------------------------
   * BACKDROP
   * -------------------------------------------------------
   *
   * We intentionally DON'T close the dialog by clicking
   * outside it. This prevents accidental exits on mobile.
   */

  /*
   * -------------------------------------------------------
   * ESCAPE KEY
   * -------------------------------------------------------
   */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        exitDialogOpen
      ) {
        event.preventDefault();
        closeExitDialog();
      }
    }
  );


  /*
   * -------------------------------------------------------
   * INITIALIZE
   * -------------------------------------------------------
   */

  function initBackGuard() {

    /*
     * Don't interfere with an already existing
     * application history state.
     */

    createGuardState();

  }


  /*
   * -------------------------------------------------------
   * PAGE VISIBILITY SAFETY
   * -------------------------------------------------------
   */

  document.addEventListener(
    "visibilitychange",
    () => {

      /*
       * If the user returns to GENIQ,
       * make sure the guard still exists.
       */

      if (
        document.visibilityState === "visible" &&
        !leavingApplication &&
        !exitDialogOpen
      ) {
        restoreGuard();
      }
    }
  );


  /*
   * -------------------------------------------------------
   * GLOBAL API
   * -------------------------------------------------------
   *
   * Useful if another GENIQ script needs to control it.
   */

  window.GENIQBackGuard = {

    open: openExitDialog,

    close: closeExitDialog,

    exit: leaveGENIQ,

    restore: restoreGuard,

    isOpen: () => exitDialogOpen

  };


  /*
   * Start.
   */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initBackGuard,
      { once: true }
    );

  } else {

    initBackGuard();

  }

})();