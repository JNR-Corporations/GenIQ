// Set PDF.js Worker Path
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    // PDF Data List (Including user's Google Drive Link)
    const pdfList = [
      {
        id: 1,
        title: "Rotational Dynamics Notes",
        category: "Physics",
        // YOUR SPECIFIED LINK:
        url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view?usp=drivesdk",
        pageCount: 34,
        featured: true
      },
      {
        id: 2,
        title: "Organic Chemistry Reactions",
        category: "Chemistry",
        url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view?usp=drivesdk",
        pageCount: 52,
        featured: true
      },
      {
        id: 3,
        title: "Calculus & Integration Masterbook",
        category: "Mathematics",
        url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view?usp=drivesdk",
        pageCount: 28,
        featured: false
      },
      {
        id: 4,
        title: "Thermodynamics & Heat Transfer",
        category: "Physics",
        url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view?usp=drivesdk",
        pageCount: 40,
        featured: true
      },
      {
        id: 5,
        title: "Coordinate Geometry Formula Handbook",
        category: "Mathematics",
        url: "https://drive.google.com/file/d/1z9jBeKSNg_9wiRk2NFcdLC_nMUI1uxJp/view?usp=drivesdk",
        pageCount: 18,
        featured: false
      }
    ];

    // DOM Elements
    const pdfGrid = document.getElementById('pdfGrid');
    const categoryChips = document.getElementById('categoryChips');
    const searchInput = document.getElementById('searchInput');
    const viewerModal = document.getElementById('viewerModal');
    const viewerIframe = document.getElementById('viewerIframe');
    const loaderScreen = document.getElementById('loaderScreen');
    const loaderStatusText = document.getElementById('loaderStatusText');
    const topProgressBar = document.getElementById('topProgressBar');
    const vTitle = document.getElementById('vTitle');
    const vCat = document.getElementById('vCat');
    const closeViewerBtn = document.getElementById('closeViewerBtn');
    const openDriveBtn = document.getElementById('openDriveBtn');

    let activeCategory = "All";
    let searchQuery = "";

    // Extract Drive File ID
    function getDriveId(url) {
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    }

    // Get First Page Thumbnail URL (Automated Google Drive Page 1 Snapshot)
    function getPdfThumbnail(url) {
      const driveId = getDriveId(url);
      if (driveId) {
        // High-res Google Drive first page preview thumbnail endpoint
        return `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
      }
      return null;
    }

    // Embed URL for PDF Viewer
    function getEmbedUrl(url) {
      const driveId = getDriveId(url);
      if (driveId) {
        return `https://drive.google.com/file/d/${driveId}/preview`;
      }
      return url;
    }

    // Filter Categories Render
    function renderCategories() {
      const categories = ["All", ...new Set(pdfList.map(item => item.category))];
      categoryChips.innerHTML = categories.map(cat => `
        <button class="chip-btn ${cat === activeCategory ? 'active' : ''}" onclick="setCategory('${cat}')">
          ${cat}
        </button>
      `).join('');
    }

    function setCategory(cat) {
      activeCategory = cat;
      renderCategories();
      renderPdfCards();
    }

    // Render PDF Cards with Automated Thumbnail & Pages Count
    function renderPdfCards() {
      const filtered = pdfList.filter(pdf => {
        const matchesCat = activeCategory === "All" || pdf.category === activeCategory;
        const matchesSearch = pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              pdf.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      pdfGrid.innerHTML = filtered.map(pdf => {
        const thumbUrl = getPdfThumbnail(pdf.url);
        return `
          <div class="pdf-card" onclick="openPdf(${pdf.id})">
            <div class="thumb-frame">
              <span class="badge-top-left">
                <svg style="width:12px;height:12px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                PDF
              </span>
              ${pdf.featured ? `<span class="badge-top-right">Featured</span>` : ''}

              <img class="thumb-img" src="${thumbUrl}" alt="${pdf.title}" loading="lazy" onerror="fallbackThumb(this)">
              <div class="thumb-overlay"></div>
            </div>

            <div class="card-body">
              <div>
                <div class="card-cat">${pdf.category}</div>
                <h3 class="card-title">${pdf.title}</h3>
              </div>

              <div class="card-footer">
                <span class="page-count-tag">
                  <svg style="width:14px;height:14px" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                  ${pdf.pageCount ? pdf.pageCount + ' Pages' : 'Page 1'}
                </span>
                <span class="read-btn">Open</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function fallbackThumb(img) {
      img.src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80';
    }

    // ========================================
    // OPEN PDF WITH DYNAMIC LOADING ANIMATION
    // ========================================
    function openPdf(id) {
      const pdf = pdfList.find(p => p.id === id);
      if (!pdf) return;

      // Set Metadata
      vTitle.textContent = pdf.title;
      vCat.textContent = pdf.category;
      openDriveBtn.onclick = () => window.open(pdf.url, '_blank');

      // Reset Animation State
      loaderScreen.classList.remove('hidden');
      viewerIframe.classList.remove('loaded');
      topProgressBar.style.width = '0%';
      loaderStatusText.textContent = "Connecting to PDF server...";

      // Open Modal Screen
      viewerModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Animate Progress Bar Simulated Steps until completely loaded
      let progress = 10;
      topProgressBar.style.width = progress + '%';

      const progressInterval = setInterval(() => {
        if (progress < 90) {
          progress += Math.floor(Math.random() * 15) + 5;
          if (progress > 90) progress = 90;
          topProgressBar.style.width = progress + '%';

          if (progress > 40 && progress < 70) {
            loaderStatusText.textContent = "Rendering document pages...";
          } else if (progress >= 70) {
            loaderStatusText.textContent = "Finalizing PDF render...";
          }
        }
      }, 300);

      // Set Iframe Source
      const embedUrl = getEmbedUrl(pdf.url);
      viewerIframe.src = embedUrl;

      // STRICT LOGIC: Hide loading animation ONLY when iframe emits FULL LOAD
      viewerIframe.onload = () => {
        clearInterval(progressInterval);
        topProgressBar.style.width = '100%';

        setTimeout(() => {
          loaderScreen.classList.add('hidden');
          viewerIframe.classList.add('loaded');
          topProgressBar.style.width = '0%';
        }, 400);
      };
    }

    function closeViewer() {
      viewerModal.classList.remove('active');
      viewerIframe.src = '';
      document.body.style.overflow = '';
    }

    closeViewerBtn.addEventListener('click', closeViewer);

    // Search Logic
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderPdfCards();
    });

    // Theme Toggle
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');

    

    themeBtn.addEventListener('click', toggleTheme);

    // Init App
    toggleTheme(); // Default setup
    renderCategories();
    renderPdfCards();