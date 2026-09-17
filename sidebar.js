(function () {
  "use strict";

  const SIDEBAR_OPEN_CLASS = "geniq-sidebar-open";
  const NOTEPAD_TAB = "notes";
  const NOTEPAD_PANEL_ID = "view-notepad";

  function getSidebar() {
    return document.getElementById("geniqSidebar");
  }

  function getProfileButton() {
    return document.getElementById("geniqProfileButton");
  }

  function syncSidebarProfile() {
    const headerName = document.getElementById("headerUserName");
    const headerAvatar = document.getElementById("headerAvatar");
    const sidebarName = document.getElementById("sidebarUserName");
    const sidebarAvatar = document.getElementById("sidebarAvatar");

    if (headerName && sidebarName) {
      sidebarName.textContent = headerName.textContent.trim() || "Student";
    }

    if (headerAvatar && sidebarAvatar) {
      sidebarAvatar.textContent = headerAvatar.textContent.trim() || "S";
    }
  }

  function syncActiveTab(tabName) {
    document
      .querySelectorAll(".geniq-sidebar-nav [data-tab]")
      .forEach(function (button) {
        const isActive = button.dataset.tab === tabName;

        button.classList.toggle("active", isActive);

        if (isActive) {
          button.setAttribute("aria-current", "page");
        } else {
          button.removeAttribute("aria-current");
        }
      });
  }

  function closeGeniqSidebar() {
    const sidebar = getSidebar();
    const profileButton = getProfileButton();

    document.body.classList.remove(SIDEBAR_OPEN_CLASS);

    if (sidebar) {
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
    }

    if (profileButton) {
      profileButton.setAttribute("aria-expanded", "false");
    }
  }

  function openGeniqSidebar() {
    const sidebar = getSidebar();
    const profileButton = getProfileButton();

    if (!sidebar) return;

    syncSidebarProfile();

    document.body.classList.add(SIDEBAR_OPEN_CLASS);
    sidebar.setAttribute("aria-hidden", "false");
    sidebar.removeAttribute("inert");

    if (profileButton) {
      profileButton.setAttribute("aria-expanded", "true");
    }

    const closeButton = sidebar.querySelector(".geniq-sidebar-close");

    if (closeButton) {
      closeButton.focus({ preventScroll: true });
    }
  }

  function showNotepadPanel() {
    const panel = document.getElementById(NOTEPAD_PANEL_ID);

    if (!panel) {
      console.warn(
        'GENIQ Notepad: "#' + NOTEPAD_PANEL_ID +
        '" panel nahi mila. HTML mein panel ID check karo.'
      );
      return false;
    }

    // Sirf app ke view panels hide karo; notepad ke andar ke elements nahi.
    document.querySelectorAll(".view-panel").forEach(function (view) {
      view.style.display = "none";
    });

    panel.hidden = false;
    panel.style.display = "block";

    syncActiveTab(NOTEPAD_TAB);
    closeGeniqSidebar();

    return true;
  }

  function openGeniqNotepad() {
    showNotepadPanel();
  }

  function geniqSidebarTab(tabName) {
    if (typeof tabName !== "string" || !tabName.trim()) {
      console.warn("GENIQ sidebar: invalid tab name.");
      return;
    }

    const selectedTab = tabName.trim();

    // My Notes ka direct route: is tab ke liye switchTab() ki zaroorat nahi.
    if (selectedTab === NOTEPAD_TAB || selectedTab === "notes1") {
      showNotepadPanel();
      return;
    }

    // Baaki tabs existing app navigation se open honge.
    if (typeof window.switchTab !== "function") {
      console.error("GENIQ sidebar: window.switchTab() was not found.");
      return;
    }

    try {
      window.switchTab(selectedTab);
      syncActiveTab(selectedTab);
      closeGeniqSidebar();
    } catch (error) {
      console.error("GENIQ sidebar: tab switch failed:", error);
    }
  }

  function initSidebar() {
    const profileButton = getProfileButton();
    const sidebar = getSidebar();

    if (profileButton && sidebar) {
      profileButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openGeniqSidebar();
        }
      });
    }

    // Current active dock tab se sidebar highlight sync karo.
    document.querySelectorAll(".dock-item.active").forEach(function (activeItem) {
      const tabName = activeItem.id.replace(/^dock-/, "");
      syncActiveTab(tabName);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeGeniqSidebar();
      }
    });

    window.addEventListener("resize", function () {
      if (!window.matchMedia("(max-width: 620px)").matches) {
        closeGeniqSidebar();
      }
    });
  }

  // Inline HTML onclick handlers ke liye global registration.
  window.openGeniqSidebar = openGeniqSidebar;
  window.closeGeniqSidebar = closeGeniqSidebar;
  window.geniqSidebarTab = geniqSidebarTab;
  window.openGeniqNotepad = openGeniqNotepad;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSidebar, { once: true });
  } else {
    initSidebar();
  }
})();