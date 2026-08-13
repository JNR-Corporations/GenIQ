import { Physics } from "./DataNotes/physics.js";
import { Chemistry } from "./DataNotes/chemistry.js";
import { Mathematics } from "./DataNotes/mathematics.js";

const ALL_CHAPTERS = {
  Physics,
  Chemistry,
  Mathematics
};

/* ==========================================================================
   PDF REPOSITORY DATA
   ========================================================================== */
const ALL_PDFS = [
  {
    id: "pdf1", title: "Maths Formula Handbook", subject: "Mathematics", size: "7.2 MB", pages: "70 Pages", badge: "CRITICAL",
    gradient: "linear-gradient(135deg, #1e1b4b, #312e81)",
    subCards: [
      { subTitle: "Calculus Formula Sheet", desc: "Limits, Differentiation & Integration standard formulas" },
      { subTitle: "Algebra & Trigonometry Shortcuts", desc: "Determinants, Quadratic roots & Series sum tricks" }
    ]
  },
  {
    id: "pdf2", title: "Physics Mechanics & Modern Physics", subject: "Physics", size: "4.2 MB", pages: "48 Pages", badge: "HIGH YIELD",
    gradient: "linear-gradient(135deg, #064e3b, #065f46)",
    subCards: [
      { subTitle: "Rotation & Gravitation Summary", desc: "MOI values for standard shapes & Kepler laws" },
      { subTitle: "Modern Physics Formulae", desc: "Photoelectric effect, Bohr radii & Decay laws" }
    ]
  },
  {
    id: "pdf3", title: "Organic Reactions & Mechanisms", subject: "Chemistry", size: "8.1 MB", pages: "85 Pages", badge: "MUST REVISE",
    gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    subCards: [
      { subTitle: "Named Reactions Chart", desc: "Aldol, Cannizzaro, Reimer-Tiemann step-by-step" },
      { subTitle: "Inorganic Periodic Trends", desc: "Anomalies, Ionization Energy & CFT splitting" }
    ]
  },
  {
    id: "pdf4", title: "JEE Main PYQ Compilation", subject: "PYQs", size: "9.6 MB", pages: "120 Pages", badge: "SOLVED",
    gradient: "linear-gradient(135deg, #9333ea, #c026d3)",
    subCards: [
      { subTitle: "Maths & Physics 2024-2026 PYQs", desc: "Chapterwise organized solutions with shortcuts" }
    ]
  }
];

let state = {
  authenticated: true,
  user: { name: 'Raj Verma', class: 'Class 12', year: '2026', theme: 'light', selectedDate: new Date().toISOString().split('T')[0] },
  tasks: [
    { id: 1, title: 'Solve 10 Thermodynamics PYQs', sub: 'Chemistry • Class 11', completed: true },
    { id: 2, title: 'Watch Organic Reaction Mechanism Video', sub: 'Chemistry • GOC', completed: false }
  ],
  notifications: [
    { id: 1, title: '59 Core Chapters Fully Synced', desc: 'All physics, chemistry & math notes ready offline.', time: 'Today' },
    { id: 2, title: 'Passcode 84000 System Active', desc: 'Platform security passcode active.', time: 'Just Now' }
  ],
  chapters: ALL_CHAPTERS,
  pdfs: ALL_PDFS,
  activeNoteFilter: 'All',
  activeChapter: null,
  activeSubCardIndex: 0
};

let pomodoroInterval = null;
let pomodoroTimeLeft = 25 * 60;
let pomodoroRunning = false;
let currentActiveTab = 'home';
let exitModalOpen = false;

/* ==========================================================================
   INITIALIZATION & STATE MANAGEMENT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateLoginStreak();
  renderNotifications();
  renderAppUI();
  fillAuthInputs();
  setupAndroidPerformanceAndExitTrap();
});

function loadState() {
  try {
    const u = localStorage.getItem('geniq_user'); if (u) state.user = JSON.parse(u);
    const t = localStorage.getItem('geniq_tasks'); if (t) state.tasks = JSON.parse(t);
    const n = localStorage.getItem('geniq_notifications'); if (n) state.notifications = JSON.parse(n);
  } catch (e) { }
}

function saveState() {
  localStorage.setItem('geniq_user', JSON.stringify(state.user));
  localStorage.setItem('geniq_tasks', JSON.stringify(state.tasks));
  localStorage.setItem('geniq_notifications', JSON.stringify(state.notifications));
}

function loginUser(isDemo = false) {
  const pin = document.getElementById('authPinInput')?.value.trim();
  if (!isDemo && pin !== '84000') {
    showToast('Incorrect Passcode! Enter 84000');
    return;
  }

  const name = document.getElementById('authNameInput')?.value.trim() || 'Raj Verma';
  const cls = document.getElementById('authClassInput')?.value || 'Class 12';
  const yr = document.getElementById('authYearInput')?.value || '2026';

  state.user.name = name;
  state.user.class = cls;
  state.user.year = yr;

  saveState();
  document.getElementById('authOverlay')?.classList.remove('active');
  renderAppUI();
  showToast('Welcome back, ' + name + '!');
}

function logoutUser() {
  document.getElementById('authOverlay')?.classList.add('active');
  showToast('Logged out');
}

function updateLoginStreak() {
  const todayStr = new Date().toDateString();
  const lastLogin = localStorage.getItem('geniq_last_login');
  let currentStreak = parseInt(localStorage.getItem('geniq_streak_count') || '1', 10);

  if (lastLogin) {
    const lastDate = new Date(lastLogin);
    const todayDate = new Date(todayStr);
    const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      currentStreak += 1;
    } else if (diffDays > 1) {
      currentStreak = 1;
    }
  } else {
    currentStreak = 1;
  }

  localStorage.setItem('geniq_last_login', todayStr);
  localStorage.setItem('geniq_streak_count', currentStreak.toString());

  const streakElem = document.getElementById('streakDisplay');
  if (streakElem) streakElem.textContent = `${currentStreak} Day${currentStreak > 1 ? 's' : ''}`;
  const profileStreak = document.getElementById('profileStreakCount');
  if (profileStreak) profileStreak.textContent = `${currentStreak} Day${currentStreak > 1 ? 's' : ''}`;
}

function fillAuthInputs() {
  if (document.getElementById('authNameInput')) document.getElementById('authNameInput').value = state.user.name || 'Raj Verma';
  if (document.getElementById('authClassInput')) document.getElementById('authClassInput').value = state.user.class || 'Class 12';
  if (document.getElementById('authYearInput')) document.getElementById('authYearInput').value = state.user.year || '2026';
  if (document.getElementById('profileDateSelector')) document.getElementById('profileDateSelector').value = state.user.selectedDate || new Date().toISOString().split('T')[0];
  if (document.getElementById('profileYearSelector')) document.getElementById('profileYearSelector').value = state.user.year || '2026';
}

function updateThemeMeta() {
  const isDark = state.user.theme === 'dark';
  const themeColor = isDark ? '#070a12' : '#f8fafc';

  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    meta.setAttribute('content', themeColor);
  });

  document.querySelectorAll('meta[name="apple-mobile-web-app-status-bar-style"]').forEach(meta => {
    meta.setAttribute('content', isDark ? 'black-translucent' : 'default');
  });
}

function renderAppUI() {
  const isDark = state.user.theme === 'dark';

  if (isDark) {
    document.body.classList.add('dark-theme');
    if (document.getElementById('themeToggle')) document.getElementById('themeToggle').checked = true;
  } else {
    document.body.classList.remove('dark-theme');
    if (document.getElementById('themeToggle')) document.getElementById('themeToggle').checked = false;
  }

  updateThemeMeta();

  const firstName = (state.user.name || 'Raj').split(' ')[0];
  const initial = firstName.charAt(0).toUpperCase();

  if (document.getElementById('headerAvatar')) document.getElementById('headerAvatar').textContent = initial;
  if (document.getElementById('profileAvatarBig')) document.getElementById('profileAvatarBig').textContent = initial;
  if (document.getElementById('headerUserName')) document.getElementById('headerUserName').textContent = firstName;
  if (document.getElementById('profileNameDisplay')) document.getElementById('profileNameDisplay').textContent = state.user.name || 'Raj Verma';
  if (document.getElementById('profileGoalDisplay')) {
    document.getElementById('profileGoalDisplay').textContent =
      `${state.user.class || 'Class 12'} • JEE Target ${state.user.year || '2026'}`;
  }

  renderTasks();
  renderSyllabusProgress();
  renderNotes();
  renderPDFs();
}

/* ==========================================================================
   FAST TAB SWITCHING & SMOOTH NAVIGATION
   ========================================================================== */
function switchTabUI(tabId) {
  currentActiveTab = tabId;

  const viewPanels = document.querySelectorAll('.view-panel');
  for (let i = 0; i < viewPanels.length; i++) {
    viewPanels[i].classList.remove('active');
  }

  const targetPanel = document.getElementById(`view-${tabId}`);
  if (targetPanel) targetPanel.classList.add('active');

  const dockItems = document.querySelectorAll('.dock-item');
  for (let i = 0; i < dockItems.length; i++) {
    dockItems[i].classList.remove('active');
  }

  const targetDock = (tabId === 'note-reader' || tabId === 'subcards') ? 'notes' : tabId;
  const dockEl = document.getElementById(`dock-${targetDock}`);
  if (dockEl) dockEl.classList.add('active');

  document.getElementById('notifDrawer')?.classList.remove('active');
  document.getElementById('universalSearchResults')?.classList.remove('active');

  // Ultra-fast scroll to top
  window.scrollTo(0, 0);
}

function switchTab(tabId, pushToHistory = true) {
  if (exitModalOpen) closeExitModal();
  switchTabUI(tabId);

  if (pushToHistory) {
    history.pushState({ tab: tabId }, '', '#' + tabId);
  }
}

function toggleNotifs() {
  document.getElementById('notifDrawer')?.classList.toggle('active');
  const dot = document.getElementById('notifDot');
  if (dot) dot.style.display = 'none';
}

function renderNotifications() {
  const list = document.getElementById('notifList');
  if (!list) return;

  if (state.notifications.length === 0) {
    list.innerHTML = `<div style="font-size:0.8rem; color:var(--text-sub); padding:10px;">No unread notifications.</div>`;
    const dot = document.getElementById('notifDot');
    if (dot) dot.style.display = 'none';
    return;
  }

  const dot = document.getElementById('notifDot');
  if (dot) dot.style.display = 'block';

  let html = '';
  state.notifications.forEach(n => {
    html += `
      <div style="font-size:0.8rem; background:var(--card-subtle); padding:12px; border-radius:12px; border:1px solid var(--border-color); margin-bottom:8px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="font-weight:800;">${n.title}</div>
              <span style="font-size:0.65rem; color:var(--text-muted);">${n.time}</span>
          </div>
          <div style="color:var(--text-sub); margin-top:3px;">${n.desc}</div>
      </div>
    `;
  });
  list.innerHTML = html;
}

function clearNotifs() {
  state.notifications = [];
  saveState();
  renderNotifications();
  showToast('Notifications cleared');
}

function togglePomodoroTimer() {
  if (pomodoroRunning) {
    clearInterval(pomodoroInterval);
    pomodoroRunning = false;
    showToast('Pomodoro Paused');
  } else {
    pomodoroRunning = true;
    showToast('Pomodoro Timer Started! ⏱️');
    pomodoroInterval = setInterval(() => {
      if (pomodoroTimeLeft > 0) {
        pomodoroTimeLeft--;
        const mins = Math.floor(pomodoroTimeLeft / 60);
        const secs = pomodoroTimeLeft % 60;
        const display = document.getElementById('pomodoroTimerDisplay');
        if (display) display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      } else {
        clearInterval(pomodoroInterval);
        pomodoroRunning = false;
        showToast('Focus Session Complete!');
      }
    }, 1000);
  }
}

function resetPomodoroTimer() {
  clearInterval(pomodoroInterval);
  pomodoroRunning = false;
  pomodoroTimeLeft = 25 * 60;
  const display = document.getElementById('pomodoroTimerDisplay');
  if (display) display.textContent = '25:00';
  showToast('Timer Reset');
}

/* ==========================================================================
   HIGH PERFORMANCE NOTES & RICH SUB-CARDS RENDERING
   ========================================================================== */
function filterNotes(filter, btnEl) {
  state.activeNoteFilter = filter;
  if (btnEl && btnEl.parentElement) {
    const buttons = btnEl.parentElement.querySelectorAll('.subject-tab');
    buttons.forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  renderNotes();
}

function renderNotes() {
  const container = document.getElementById('notesContainer');
  if (!container) return;
  const query = (document.getElementById('notesSearchInput')?.value || '').toLowerCase();

  let allNotesList = [];
  Object.keys(state.chapters).forEach(sub => {
    state.chapters[sub].forEach((ch) => {
      allNotesList.push({
        id: ch.id,
        subject: sub,
        title: ch.title,
        desc: `Class ${ch.class} • ${ch.desc}`,
        done: ch.done,
        chapter: ch
      });
    });
  });

  const filtered = allNotesList.filter(n => {
    const matchCat = state.activeNoteFilter === 'All' || n.subject === state.activeNoteFilter;
    const matchQuery = n.title.toLowerCase().includes(query) || n.desc.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:20px;">No chapters found.</p>`;
    return;
  }

  let htmlBuffer = '';
  filtered.forEach(n => {
    const cssSubClass = n.subject.toLowerCase();
    const iconBgClass = n.subject === 'Physics' ? 'physics-icon-bg' : (n.subject === 'Chemistry' ? 'chem-icon-bg' : 'math-icon-bg');
    const subCardsCount = n.chapter.subCards ? n.chapter.subCards.length : 0;

    htmlBuffer += `
      <div class="chapter-card-refined ${cssSubClass}" onclick="openSubCardsScreen('${n.id}', '${n.subject}')">
          <div style="display:flex; align-items:center; gap:12px; flex:1;">
              <div class="chapter-icon-wrapper ${iconBgClass}">
                  <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                  <div style="font-size:0.92rem; font-weight:800; color:var(--text-main);">${n.title}</div>
                  <div style="font-size:0.72rem; color:var(--text-sub); margin-top:2px;">${n.desc}</div>
              </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px; flex-shrink:0;">
              <span style="font-size:0.68rem; font-weight:800; padding:4px 10px; border-radius:10px; background:var(--primary-light); color:var(--primary);">${subCardsCount} Sub-Cards</span>
              <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">Open →</span>
          </div>
      </div>
    `;
  });

  container.innerHTML = htmlBuffer;
}

function openSubCardsScreen(chapterId, subject) {
  const loader = document.getElementById('cardLoaderOverlay');
  if (loader) loader.classList.add('active');

  setTimeout(() => {
    if (loader) loader.classList.remove('active');
    const chapter = state.chapters[subject]?.find(c => c.id === chapterId);
    if (!chapter) return;

    state.activeChapter = { ...chapter, subject };

    const header = document.getElementById('subCardsHeaderCard');
    if (header) {
      header.innerHTML = `
        <span style="font-size:0.68rem; font-weight:800; color:var(--primary); text-transform:uppercase;">${subject} • CLASS ${chapter.class}</span>
        <h2 style="font-size:1.25rem; font-weight:800; margin-top:4px;">${chapter.title}</h2>
        <p style="font-size:0.8rem; color:var(--text-sub); margin-top:2px;">${chapter.desc}</p>
      `;
    }

    const container = document.getElementById('subCardsContainer');
    const subCardsCountBadge = document.getElementById('subCardCountBadge');

    if (subCardsCountBadge) subCardsCountBadge.textContent = `${chapter.subCards ? chapter.subCards.length : 0} Available`;

    if (container) {
      if (chapter.subCards && chapter.subCards.length > 0) {
        let htmlBuffer = '';
        chapter.subCards.forEach((sc, idx) => {
          htmlBuffer += `
            <div class="sub-card-item-rich" onclick="openSubCardReader('${chapterId}', '${subject}', ${idx})">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="sub-card-badge-pill">${sc.badge || 'Topic Note'}</span>
                    <span style="font-size:0.72rem; font-weight:800; color:var(--primary);">Explore Content →</span>
                </div>
                <div>
                    <div style="font-size:0.98rem; font-weight:800; color:var(--text-main);">${sc.subTitle}</div>
                    <div style="font-size:0.78rem; color:var(--text-sub); margin-top:3px;">${sc.desc}</div>
                </div>
                <div style="font-size:0.76rem; color:var(--text-muted); line-height:1.4; border-top:1px dashed var(--border-color); padding-top:8px;">
                    Tap to view full formula breakdown & inner details.
                </div>
            </div>
          `;
        });
        container.innerHTML = htmlBuffer;
      } else {
        container.innerHTML = `<div style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:20px;">No sub-cards available for this chapter yet.</div>`;
      }
    }

    switchTab('subcards');
  }, 120);
}

function openSubCardReader(chapterId, subject, index) {
  const chapter = state.chapters[subject]?.find(c => c.id === chapterId);
  if (!chapter || !chapter.subCards || !chapter.subCards[index]) return;

  state.activeSubCardIndex = index;
  const sc = chapter.subCards[index];

  const header = document.getElementById('readerHeaderCard');
  if (header) {
    header.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.68rem; font-weight:800; color:var(--primary); text-transform:uppercase;">${subject} • ${chapter.title}</span>
          <span class="sub-card-badge-pill">${index + 1} of ${chapter.subCards.length}</span>
      </div>
      <h2 style="font-size:1.2rem; font-weight:800;">${sc.subTitle}</h2>
      <p style="font-size:0.8rem; color:var(--text-sub); margin-top:2px;">${sc.desc}</p>
    `;
  }

  const container = document.getElementById('readerContentContainer');
  if (container) {
    container.innerHTML = sc.content || `
      <div class="rich-callout-box">
         <strong>Overview:</strong> ${sc.desc}
      </div>
      <div class="rich-formula-box">
         Detailed content rendering via innerHTML is active. Formulas, diagrams & notes loaded smoothly.
      </div>
    `;
  }

  const prevBtn = document.getElementById('prevSubCardBtn');
  const nextBtn = document.getElementById('nextSubCardBtn');

  if (prevBtn) {
    prevBtn.style.display = index > 0 ? 'inline-flex' : 'none';
    prevBtn.onclick = () => openSubCardReader(chapterId, subject, index - 1);
  }
  if (nextBtn) {
    nextBtn.style.display = index < chapter.subCards.length - 1 ? 'inline-flex' : 'none';
    nextBtn.onclick = () => openSubCardReader(chapterId, subject, index + 1);
  }

  switchTab('note-reader');
}

/* ==========================================================================
   PDF SECTION RENDERING
   ========================================================================== */
function renderPDFs(query = '') {
  const container = document.getElementById('pdfContainer');
  if (!container) return;
  const q = query.toLowerCase();

  const filtered = state.pdfs.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.subject.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:20px; font-size:0.8rem; color:var(--text-sub);">No PDFs matching your search.</div>`;
    return;
  }

  let htmlBuffer = '';
  filtered.forEach(p => {
    htmlBuffer += `
      <div class="pdf-card-enhanced">
          <div class="pdf-card-banner" style="background: ${p.gradient};">
              <div>
                  <span class="pdf-badge">${p.badge}</span>
                  <div style="font-size: 0.72rem; opacity: 0.85; margin-top: 4px;">${p.subject}</div>
              </div>
              <div style="font-size: 0.72rem; font-weight: 800; background: rgba(0,0,0,0.25); padding: 4px 8px; border-radius: 8px;">
                  ${p.pages}
              </div>
          </div>
          <div class="pdf-body">
              <div style="font-size: 0.95rem; font-weight: 800; color: var(--text-main);">${p.title}</div>
              <div style="font-size: 0.72rem; color: var(--text-sub);">Size: ${p.size} • Offline Ready</div>
              
              <div style="margin-top: 4px; display: flex; flex-direction: column; gap: 6px;">
                  ${p.subCards ? p.subCards.map(s => `
                      <div style="font-size: 0.72rem; background: var(--card-subtle); padding: 6px 10px; border-radius: 8px; border: 1px solid var(--border-color);">
                          <strong>${s.subTitle}:</strong> ${s.desc}
                      </div>
                  `).join('') : ''}
              </div>

              <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 8px;">
                  <button class="btn-pill btn-primary" style="flex:1; padding:7px 12px; font-size:0.75rem;" onclick="showToast('Opening PDF Viewer...')">Read PDF</button>
                  <button class="btn-pill btn-outline" style="padding:7px 10px; font-size:0.75rem;" onclick="showToast('Downloading ${p.title}...')">⬇</button>
              </div>
          </div>
      </div>
    `;
  });

  container.innerHTML = htmlBuffer;
}

/* ==========================================================================
   SEARCH & TASKS MANAGERS
   ========================================================================== */
function handleUniversalSearch(q) {
  const overlay = document.getElementById('universalSearchResults');
  if (!overlay) return;

  if (!q.trim()) {
    overlay.classList.remove('active');
    return;
  }

  const query = q.toLowerCase();
  let matches = [];

  Object.keys(state.chapters).forEach(sub => {
    state.chapters[sub].forEach(ch => {
      if (ch.title.toLowerCase().includes(query)) {
        matches.push({ type: 'Chapter', title: ch.title, sub, id: ch.id });
      }
      if (ch.subCards) {
        ch.subCards.forEach((sc, idx) => {
          if (sc.subTitle.toLowerCase().includes(query) || sc.desc.toLowerCase().includes(query)) {
            matches.push({ type: 'Sub-Card', title: sc.subTitle, sub, id: ch.id, subIdx: idx });
          }
        });
      }
    });
  });

  state.pdfs.forEach(pdf => {
    if (pdf.title.toLowerCase().includes(query)) {
      matches.push({ type: 'PDF Material', title: pdf.title, sub: pdf.subject });
    }
  });

  if (matches.length === 0) {
    overlay.innerHTML = `<div style="padding:12px; font-size:0.8rem; color:var(--text-sub); text-align:center;">No search results found</div>`;
  } else {
    let htmlBuffer = '';
    matches.forEach(m => {
      let clickAttr = '';
      if (m.type === 'Chapter') clickAttr = `openSubCardsScreen('${m.id}', '${m.sub}')`;
      else if (m.type === 'Sub-Card') clickAttr = `openSubCardReader('${m.id}', '${m.sub}', ${m.subIdx})`;
      else clickAttr = `switchTab('pdfs')`;

      htmlBuffer += `
        <div class="search-result-item" onclick="${clickAttr}; document.getElementById('universalSearchResults').classList.remove('active');">
            <div>
                <div style="font-size:0.85rem; font-weight:800;">${m.title}</div>
                <div style="font-size:0.72rem; color:var(--text-sub);">${m.sub}</div>
            </div>
            <span class="sub-card-badge-pill">${m.type}</span>
        </div>
      `;
    });
    overlay.innerHTML = htmlBuffer;
  }
  overlay.classList.add('active');
}

function renderTasks() {
  const list = document.getElementById('taskList');
  if (!list) return;

  if (state.tasks.length === 0) {
    list.innerHTML = `<p style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:10px;">No daily targets set.</p>`;
    return;
  }

  let htmlBuffer = '';
  state.tasks.forEach(t => {
    htmlBuffer += `
      <div class="task-item">
          <div class="task-check ${t.completed ? 'completed' : ''}" onclick="toggleTask(${t.id})">
              ${t.completed ? '✓' : ''}
          </div>
          <div>
              <div class="task-title ${t.completed ? 'completed' : ''}">${t.title}</div>
              <div style="font-size: 0.72rem; color: var(--text-sub); margin-top: 1px;">${t.sub}</div>
          </div>
      </div>
    `;
  });
  list.innerHTML = htmlBuffer;
}

function toggleTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveState();
    renderTasks();
  }
}

function createTask() {
  const title = document.getElementById('newTaskInput')?.value.trim();
  const sub = document.getElementById('newTaskSubInput')?.value.trim() || 'General Target';
  if (!title) {
    showToast('Please enter target title');
    return;
  }
  state.tasks.push({ id: Date.now(), title, sub, completed: false });
  saveState();
  renderTasks();
  closeModal('addTaskModal');
  if (document.getElementById('newTaskInput')) document.getElementById('newTaskInput').value = '';
  showToast('Target added!');
}

function renderSyllabusProgress() {
  let total = 0, done = 0;
  Object.keys(state.chapters).forEach(s => {
    state.chapters[s].forEach(c => {
      total++;
      if (c.done) done++;
    });
  });
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const elem = document.getElementById('overallPercentText');
  if (elem) elem.textContent = `${pct}%`;
}

/* MODALS & PROFILE */
function openAddTaskModal() { document.getElementById('addTaskModal')?.classList.add('active'); }
function openEditProfileModal() {
  if (document.getElementById('editNameInput')) document.getElementById('editNameInput').value = state.user.name || 'Raj Verma';
  if (document.getElementById('editClassInput')) document.getElementById('editClassInput').value = state.user.class || 'Class 12';
  if (document.getElementById('editYearInput')) document.getElementById('editYearInput').value = state.user.year || '2026';
  document.getElementById('editProfileModal')?.classList.add('active');
}
function openAboutModal() { document.getElementById('aboutAppModal')?.classList.add('active'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('active'); }

function saveProfile() {
  state.user.name = document.getElementById('editNameInput')?.value.trim() || 'Raj Verma';
  state.user.class = document.getElementById('editClassInput')?.value || 'Class 12';
  state.user.year = document.getElementById('editYearInput')?.value || '2026';
  saveState();
  renderAppUI();
  closeModal('editProfileModal');
  showToast('Profile updated successfully!');
}

function toggleTheme(isDark) {
  state.user.theme = isDark ? 'dark' : 'light';
  saveState();
  renderAppUI();
}

function updateProfileDate(val) {
  state.user.selectedDate = val;
  saveState();
  showToast('Target date set: ' + val);
}

function updateProfileYear(val) {
  state.user.year = val;
  saveState();
  renderAppUI();
  showToast('JEE Target year set: ' + val);
}

function exportLocalData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "GENIQ_UserData.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Data exported as JSON');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ==========================================================================
   CUSTOM EXIT PERMISSION DIALOG UI (NO BROWSER DEFAULT POPUP)
   ========================================================================== */
function injectExitModalUI() {
  if (document.getElementById('customExitModal')) return;

  const modalContainer = document.createElement('div');
  modalContainer.id = 'customExitModal';
  modalContainer.style.cssText = `
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(3, 7, 18, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 20px;
    box-sizing: border-box;
  `;

  modalContainer.innerHTML = `
    <div id="customExitCard" style="
      background: var(--card-bg, #ffffff);
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.15));
      border-radius: 24px;
      width: 100%;
      max-width: 320px;
      padding: 24px 20px 20px;
      text-align: center;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
      transform: scale(0.92);
      transition: transform 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    ">
      <div style="
        width: 58px; height: 58px;
        background: rgba(239, 68, 68, 0.12);
        color: #ef4444;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        margin: 0 auto 16px auto;
      ">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </div>

      <h3 style="margin: 0 0 6px 0; font-size: 1.15rem; font-weight: 800; color: var(--text-main, #0f172a);">App se Bahar Jayen?</h3>
      <p style="margin: 0 0 20px 0; font-size: 0.82rem; color: var(--text-sub, #64748b); line-height: 1.45;">
        Kya aap GenIQ app ko close karna chahte hain?
      </p>

      <div style="display: flex; gap: 10px;">
        <button id="cancelExitModalBtn" style="
          flex: 1;
          padding: 12px;
          border-radius: 14px;
          border: 1px solid var(--border-color, #e2e8f0);
          background: var(--card-subtle, #f1f5f9);
          color: var(--text-main, #334155);
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          outline: none;
        ">Nahi, Ruko</button>

        <button id="confirmExitModalBtn" style="
          flex: 1;
          padding: 12px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          outline: none;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
        ">Haan, Exit</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalContainer);

  document.getElementById('cancelExitModalBtn').onclick = closeExitModal;
  document.getElementById('confirmExitModalBtn').onclick = confirmExitApp;
}

function showExitModal() {
  injectExitModalUI();
  const modal = document.getElementById('customExitModal');
  const card = document.getElementById('customExitCard');
  if (!modal || exitModalOpen) return;

  exitModalOpen = true;
  modal.style.opacity = '1';
  modal.style.pointerEvents = 'auto';
  if (card) card.style.transform = 'scale(1)';

  history.pushState({ modal: 'exit' }, '', '#exit');
}

function closeExitModal() {
  const modal = document.getElementById('customExitModal');
  const card = document.getElementById('customExitCard');
  if (card) card.style.transform = 'scale(0.92)';
  if (modal) {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
  }
  exitModalOpen = false;
}

function confirmExitApp() {
  closeExitModal();
  if (window.navigator && window.navigator.app && typeof window.navigator.app.exitApp === 'function') {
    window.navigator.app.exitApp();
  } else if (window.Android && typeof window.Android.exitApp === 'function') {
    window.Android.exitApp();
  } else {
    showToast('Exiting Application...');
    setTimeout(() => {
      window.history.back();
    }, 300);
  }
}

/* ==========================================================================
   ANDROID BACK NAVIGATION TRAP & SCROLL OPTIMIZATIONS
   ========================================================================== */
function setupAndroidPerformanceAndExitTrap() {
  injectExitModalUI();

  // Initial history state
  if (!history.state) {
    history.replaceState({ tab: 'home' }, '', '#home');
  }

  // Intercept back button completely
  window.addEventListener('popstate', (e) => {
    if (exitModalOpen) {
      closeExitModal();
      return;
    }

    if (e.state && e.state.tab) {
      if (e.state.tab === 'home') {
        switchTabUI('home');
      } else {
        switchTabUI(e.state.tab);
      }
    } else {
      // User is at root home tab and pressed back button -> Show custom exit modal
      if (currentActiveTab === 'home') {
        showExitModal();
      } else {
        switchTab('home', false);
      }
    }
  });

  // Touch listener optimizations for Android WebView (Zero touch delays)
  window.addEventListener('touchstart', () => {}, { passive: true });
  window.addEventListener('touchmove', () => {}, { passive: true });
}

/* Expose Functions Globally for Inline HTML Listeners */
window.showToast = showToast;
window.switchTab = switchTab;
window.toggleTask = toggleTask;
window.createTask = createTask;
window.openAddTaskModal = openAddTaskModal;
window.openEditProfileModal = openEditProfileModal;
window.openAboutModal = openAboutModal;
window.closeModal = closeModal;
window.saveProfile = saveProfile;
window.toggleTheme = toggleTheme;
window.updateProfileDate = updateProfileDate;
window.updateProfileYear = updateProfileYear;
window.exportLocalData = exportLocalData;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.toggleNotifs = toggleNotifs;
window.clearNotifs = clearNotifs;
window.togglePomodoroTimer = togglePomodoroTimer;
window.resetPomodoroTimer = resetPomodoroTimer;
window.filterNotes = filterNotes;
window.handleUniversalSearch = handleUniversalSearch;
window.openSubCardsScreen = openSubCardsScreen;
window.openSubCardReader = openSubCardReader;
window.renderPDFs = renderPDFs;
window.showExitModal = showExitModal;
window.closeExitModal = closeExitModal;
window.confirmExitApp = confirmExitApp;