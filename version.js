window.GENIQ_CONFIG = {
    // ============================================================
    // GENIQ VERSION
    // Format: vMAJOR.MINOR.PATCH
    //
    // MAJOR → Major platform/release upgrade
    // Example: v3.0.0 → v4.0.0
    //
    // MINOR → New features, modules, tests, tools, etc.
    // Example: v3.0.0 → v3.1.0
    //
    // PATCH → Bug fixes and small improvements
    // Example: v3.0.0 → v3.0.1
    //
    // CURRENT VERSION: v3.0.0
    // ============================================================
    version: "v3.0.1"
};


function updateGENIQVersion() {

    document.querySelectorAll(".geniq-version-badge").forEach((el) => {

        el.textContent = window.GENIQ_CONFIG.version;

    });

}


if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", updateGENIQVersion);

} else {

    updateGENIQVersion();

}