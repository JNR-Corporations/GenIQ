
/* =========================================================
   GENIQ — TEST HUB JS
   Card interactions only
   ========================================================= */

(() => {

  "use strict";

  const cards =
    document.querySelectorAll("#view-tests .test-card");

  cards.forEach(card => {

    card.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        card.click();
      }

    });

  });


  /* Subtle touch feedback for Android */

  cards.forEach(card => {

    card.addEventListener(
      "touchstart",
      () => {
        card.classList.add("card-touch");
      },
      { passive: true }
    );

    card.addEventListener(
      "touchend",
      () => {
        card.classList.remove("card-touch");
      },
      { passive: true }
    );

  });

})();
