"use strict";

/* =========================================================
   GENIQ PDF HUB — Optimized Viewer
   Works with the existing HTML IDs/classes.
   ========================================================= */

/* ---------- PDF.js worker: safe configuration ---------- */

if (window.pdfjsLib?.GlobalWorkerOptions) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

/* ---------- PDF data ---------- */
/*
  IMPORTANT:
  Every url must be a plain URL string, not Markdown:
  "https://drive.google.com/file/d/FILE_ID/view"

  Replace repeated sample IDs with each PDF's real Drive ID.
*/

const pdfList = [
  {
    id: 1,
    title: "Trigonomentry Formula Sheet",
    category: "Mathematics",
    url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view",
    pageCount: 8,
    featured: false
  },
  {
    id: 2,
    title: "Limits Formula Sheet",
    category: "Mathematics",
    url: "https://drive.google.com/file/d/1FFTp5OXfvnsjIAHXmImyswYX63j2wIpL/view?usp=sharing",
    pageCount: 4,
    featured: false
  },
  {
    id: 3,
    title: "Calculus & Integration Masterbook",
    category: "Mathematics",
    url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view",
    pageCount: 28,
    featured: false
  },
  {
    id: 4,
    title: "Thermodynamics & Heat Transfer",
    category: "Physics",
    url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view",
    pageCount: 40,
    featured: false
  },
  {
    id: 5,
    title: "Coordinate Geometry Formula Handbook",
    category: "Mathematics",
    url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view",
    pageCount: 18,
    featured: false
  }
];

/* ---------- DOM references ---------- */

const pdfGrid = document.getElementById("pdfGrid");
const categoryChips = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");

const viewerModal = document.getElementById("viewerModal");
const viewerIframe = document.getElementById("viewerIframe");
const loaderScreen = document.getElementById("loaderScreen");
const loaderStatusText = document.getElementById("loaderStatusText");
const topProgressBar = document.getElementById("topProgressBar");

const vTitle = document.getElementById("vTitle");
const vCat = document.getElementById("vCat");
const closeViewerBtn = document.getElementById("closeViewerBtn");
const openDriveBtn = document.getElementById("openDriveBtn");

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

/* ---------- State ---------- */

let activeCategory = "All";
let searchQuery = "";
let activePdfId = null;
let viewerTimer = null;
let loadTimeout = null;
let openRequestId = 0;

/* ---------- Helpers ---------- */

function getDriveId(url) {
  if (typeof url !== "string") return null;

  try {
    const parsed = new URL(url);
    const pathMatch = parsed.pathname.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);

    if (pathMatch) return pathMatch[1];

    return parsed.searchParams.get("id");
  } catch {
    return null;
  }
}

function getPdfThumbnail(url) {
  const driveId = getDriveId(url);

  return driveId
    ? `https://drive.google.com/thumbnail?id=${encodeURIComponent(driveId)}&sz=w600`
    : null;
}

function getEmbedUrl(url) {
  const driveId = getDriveId(url);

  if (driveId) {
    return `https://drive.google.com/file/d/${encodeURIComponent(driveId)}/preview`;
  }

  return url;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function setLoadingMessage(message) {
  if (loaderStatusText) loaderStatusText.textContent = message;
}

function setProgress(value) {
  if (topProgressBar) {
    topProgressBar.style.width = `${Math.max(0, Math.min(100, value))}%`;
  }
}

function clearViewerTimers() {
  if (viewerTimer !== null) {
    clearInterval(viewerTimer);
    viewerTimer = null;
  }

  if (loadTimeout !== null) {
    clearTimeout(loadTimeout);
    loadTimeout = null;
  }
}

function showLoader(message) {
  loaderScreen?.classList.remove("hidden");
  viewerIframe?.classList.remove("loaded");
  setLoadingMessage(message);
  setProgress(25);
}

function hideLoader() {
  loaderScreen?.classList.add("hidden");
  viewerIframe?.classList.add("loaded");
  setProgress(0);
}

/* ---------- Category filters ---------- */

function renderCategories() {
  if (!categoryChips) return;

  const categories = ["All", ...new Set(pdfList.map(item => item.category))];

  categoryChips.innerHTML = categories.map(category => {
    const safeCategory = escapeHtml(category);
    const activeClass = category === activeCategory ? "active" : "";

    return `
      <button
        type="button"
        class="chip-btn ${activeClass}"
        onclick="setCategory('${safeCategory}')"
      >${safeCategory}</button>
    `;
  }).join("");
}

function setCategory(category) {
  activeCategory = category;
  renderCategories();
  renderPdfCards();
}

/* ---------- PDF cards ---------- */

function renderPdfCards() {
  if (!pdfGrid) return;

  const normalizedQuery = searchQuery.toLowerCase();

  const filtered = pdfList.filter(pdf => {
    const matchesCategory =
      activeCategory === "All" || pdf.category === activeCategory;

    const matchesSearch =
      pdf.title.toLowerCase().includes(normalizedQuery) ||
      pdf.category.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    pdfGrid.innerHTML = `
      <p class="pdf-empty-state" role="status">
        No PDFs found. Try another search or category.
      </p>
    `;
    return;
  }

  pdfGrid.innerHTML = filtered.map(pdf => {
    const thumbnail = getPdfThumbnail(pdf.url);
    const imageMarkup = thumbnail
      ? `<img
           class="thumb-img"
           src="${thumbnail}"
           alt="${escapeHtml(pdf.title)}"
           loading="lazy"
           decoding="async"
           onerror="fallbackThumb(this)"
         >`
      : `<div class="thumb-placeholder" aria-label="PDF preview unavailable">PDF</div>`;

    return `
      <article
        class="pdf-card"
        role="button"
        tabindex="0"
        aria-label="Open ${escapeHtml(pdf.title)}"
        onclick="openPdf(${Number(pdf.id)})"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openPdf(${Number(pdf.id)});}"
      >
        <div class="thumb-frame">
          ${pdf.featured ? '<span class="badge-top-right">Featured</span>' : ""}
          ${imageMarkup}
          <div class="thumb-overlay"></div>
        </div>

        <div class="card-body">
          <div>
            <div class="card-cat">${escapeHtml(pdf.category)}</div>
            <h3 class="card-title">${escapeHtml(pdf.title)}</h3>
          </div>

          <div class="card-footer">
            <span class="page-count-tag">
              ${Number(pdf.pageCount) > 0 ? `${Number(pdf.pageCount)} Pages` : "PDF"}
            </span>
            <span class="read-btn">Open</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function fallbackThumb(img) {
  if (!img || img.dataset.fallbackUsed === "true") return;

  img.dataset.fallbackUsed = "true";
  img.onerror = null;
  img.src =
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=75";
}

/* ---------- Open PDF ---------- */

function openPdf(id) {
  const pdf = pdfList.find(item => item.id === Number(id));
  if (!pdf || !viewerModal || !viewerIframe) return;

  const embedUrl = getEmbedUrl(pdf.url);
  if (!embedUrl) {
    setLoadingMessage("This PDF link is invalid.");
    return;
  }

  clearViewerTimers();

  const requestId = ++openRequestId;
  activePdfId = pdf.id;

  if (vTitle) vTitle.textContent = pdf.title;
  if (vCat) vCat.textContent = pdf.category;

  if (openDriveBtn) {
    openDriveBtn.onclick = () => window.open(pdf.url, "_blank", "noopener,noreferrer");
  }

  showLoader("Connecting to PDF preview…");

  viewerModal.classList.add("active");
  document.body.style.overflow = "hidden";

  /*
    Register handlers BEFORE assigning src.
    The browser's iframe load event only confirms that the frame loaded;
    it cannot confirm that every PDF page has finished rendering.
  */

  viewerIframe.onload = () => {
    if (requestId !== openRequestId) return;

    clearViewerTimers();
    setProgress(100);
    setLoadingMessage("PDF preview loaded.");

    window.setTimeout(() => {
      if (requestId !== openRequestId) return;
      hideLoader();
    }, 180);
  };

  viewerIframe.onerror = () => {
    if (requestId !== openRequestId) return;

    clearViewerTimers();
    setProgress(0);
    setLoadingMessage("Could not load the preview. Try opening it in Drive.");
  };

  /*
    Avoid an endless loader if Drive/network never finishes.
    This does not cancel the iframe; it only updates the message.
  */
  loadTimeout = window.setTimeout(() => {
    if (requestId !== openRequestId) return;

    setProgress(0);
    setLoadingMessage(
      "Preview is taking longer than expected. Check your connection or open it in Drive."
    );
  }, 30000);

  viewerIframe.src = embedUrl;
}

/* ---------- Close PDF ---------- */

function closeViewer() {
  clearViewerTimers();
  ++openRequestId;
  activePdfId = null;

  viewerModal?.classList.remove("active");

  if (viewerIframe) {
    viewerIframe.onload = null;
    viewerIframe.onerror = null;
    viewerIframe.src = "about:blank";
    viewerIframe.classList.remove("loaded");
  }

  loaderScreen?.classList.remove("hidden");
  setProgress(0);
  document.body.style.overflow = "";
}

closeViewerBtn?.addEventListener("click", closeViewer);

/* ---------- Search ---------- */

searchInput?.addEventListener("input", event => {
  searchQuery = event.target.value.trim();
  renderPdfCards();
});

/* ---------- Theme toggle ---------- */

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", nextTheme);

  if (themeIcon) {
    themeIcon.innerHTML = nextTheme === "dark"
      ? `<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>`
      : `<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36A6.5 6.5 0 0 1 13.36 3.1C13.08 3.04 12.54 3 12 3z"/>`;
  }
}

themeBtn?.addEventListener("click", toggleTheme);

/* ---------- Initial render ---------- */

renderCategories();
renderPdfCards();