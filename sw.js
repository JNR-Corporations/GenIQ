/* =========================================================
   GENIQ SERVICE WORKER
   JEE Main & Advanced AI Prep Platform
   Publisher: JNR Corporations
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   VERSION
   --------------------------------------------------------- */

const GENIQ_SW_VERSION = "5.0.0";

const CACHE_NAMES = {
  core: `geniq-core-${GENIQ_SW_VERSION}`,
  runtime: `geniq-runtime-${GENIQ_SW_VERSION}`,
  data: `geniq-data-${GENIQ_SW_VERSION}`
};

/* ---------------------------------------------------------
   CORE APPLICATION FILES
   --------------------------------------------------------- */

const CORE_ASSETS = [
  "/",
  "/index.html",
  "/android.html",
  "/desktop.html",
  "/manifest.json",

  /* Main styles */
  "/css/root.css",
  "/css/universal.css",
  "/css/android.css",
  "/css/desktop.css",
  "/css/sidebar.css",
  "/css/notepad.css",
  "/css/pdf.css",
  "/css/test.css",

  /* Main assets */
  "/logo512.png",
  "/banner.png"
];

/* ---------------------------------------------------------
   INSTALL
   --------------------------------------------------------- */

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAMES.core)
      .then(async (cache) => {
        /*
         * Cache assets individually.
         * One missing optional file should not break
         * the complete service-worker installation.
         */
        await Promise.allSettled(
          CORE_ASSETS.map(async (asset) => {
            try {
              await cache.add(asset);
            } catch (error) {
              console.warn(
                "[GENIQ SW] Could not cache:",
                asset,
                error
              );
            }
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

/* ---------------------------------------------------------
   ACTIVATE
   --------------------------------------------------------- */

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        const validCaches = Object.values(CACHE_NAMES);

        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!validCaches.includes(cacheName)) {
              return caches.delete(cacheName);
            }

            return Promise.resolve(false);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

/* ---------------------------------------------------------
   HELPERS
   --------------------------------------------------------- */

function isSameOrigin(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch {
    return false;
  }
}

function isHTMLRequest(request) {
  const accept = request.headers.get("accept") || "";

  return (
    request.mode === "navigate" ||
    accept.includes("text/html")
  );
}

function isDataRequest(url) {
  return (
    url.pathname.endsWith(".json") ||
    url.pathname.includes("/data/")
  );
}

function isStaticAsset(url) {
  return (
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".woff") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".ttf") ||
    url.pathname.endsWith(".pdf")
  );
}

/* ---------------------------------------------------------
   NETWORK-FIRST FOR HTML
   --------------------------------------------------------- */

async function networkFirstHTML(request) {
  const runtimeCache = await caches.open(CACHE_NAMES.runtime);

  try {
    const response = await fetch(request);

    if (response && response.ok) {
      await runtimeCache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    /*
     * If a requested route is unavailable offline,
     * fall back to the correct application shell.
     */
    const url = new URL(request.url);

    if (
      url.pathname.endsWith("/android.html") ||
      /Android/i.test(self.navigator?.userAgent || "")
    ) {
      const androidFallback = await caches.match("/android.html");

      if (androidFallback) {
        return androidFallback;
      }
    }

    const desktopFallback = await caches.match("/desktop.html");

    if (desktopFallback) {
      return desktopFallback;
    }

    const indexFallback = await caches.match("/index.html");

    if (indexFallback) {
      return indexFallback;
    }

    return new Response(
      "GENIQ is currently offline.",
      {
        status: 503,
        statusText: "GENIQ Offline",
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  }
}

/* ---------------------------------------------------------
   CACHE-FIRST FOR STATIC ASSETS
   --------------------------------------------------------- */

async function cacheFirst(request) {
  const cached = await caches.match(request);

  if (cached) {
    /*
     * Update in background.
     */
    fetch(request)
      .then(async (response) => {
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAMES.runtime);
          await cache.put(request, response.clone());
        }
      })
      .catch(() => {});

    return cached;
  }

  try {
    const response = await fetch(request);

    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAMES.runtime);
      await cache.put(request, response.clone());
    }

    return response;
  } catch {
    return new Response("", {
      status: 503,
      statusText: "GENIQ Asset Unavailable"
    });
  }
}

/* ---------------------------------------------------------
   NETWORK-FIRST FOR JSON / EDUCATIONAL DATA
   --------------------------------------------------------- */

async function networkFirstData(request) {
  const cache = await caches.open(CACHE_NAMES.data);

  try {
    const response = await fetch(request);

    if (response && response.ok) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch {
    const cached = await cache.match(request);

    if (cached) {
      return cached;
    }

    return new Response(
      JSON.stringify({
        error: "offline",
        message: "GENIQ content is unavailable offline."
      }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}

/* ---------------------------------------------------------
   FETCH
   --------------------------------------------------------- */

self.addEventListener("fetch", (event) => {
  const { request } = event;

  /*
   * Only GET requests.
   */
  if (request.method !== "GET") {
    return;
  }

  /*
   * Do not intercept Firebase, Google Fonts,
   * CDN libraries or other external services.
   */
  if (!isSameOrigin(request)) {
    return;
  }

  const url = new URL(request.url);

  /*
   * HTML / navigation
   */
  if (isHTMLRequest(request)) {
    event.respondWith(
      networkFirstHTML(request)
    );
    return;
  }

  /*
   * JSON / educational data
   */
  if (isDataRequest(url)) {
    event.respondWith(
      networkFirstData(request)
    );
    return;
  }

  /*
   * CSS / JS / images / fonts / PDFs
   */
  if (isStaticAsset(url)) {
    event.respondWith(
      cacheFirst(request)
    );
  }
});

/* ---------------------------------------------------------
   MESSAGE API
   --------------------------------------------------------- */

self.addEventListener("message", (event) => {
  if (!event.data) {
    return;
  }

  /*
   * Force activation of a newly installed SW.
   */
  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  /*
   * Clear runtime/data caches without removing
   * the core application shell.
   */
  if (event.data.type === "CLEAR_RUNTIME_CACHE") {
    event.waitUntil(
      Promise.all([
        caches.delete(CACHE_NAMES.runtime),
        caches.delete(CACHE_NAMES.data)
      ])
    );
  }
});

/* ---------------------------------------------------------
   DEBUG
   --------------------------------------------------------- */

console.log(
  `[GENIQ SW] Service Worker ${GENIQ_SW_VERSION} loaded.`
);