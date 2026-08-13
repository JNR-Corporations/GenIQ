import { Physics } from "./DataNotes/physics.js";
import { Chemistry } from "./DataNotes/chemistry.js";
import { Mathematics } from "./DataNotes/mathematics.js";

const ALL_CHAPTERS = {
  Physics,
  Chemistry,
  Mathematics
};

/* ==========================================================================
   PDF REPOSITORY DATA (UPGRADED UI MATCHING TEST SECTION)
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
let isExitModalOpen = false;

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateLoginStreak();
  renderNotifications();
  renderAppUI();
  fillAuthInputs();
  initAndroidScroll();
  initAndroidNavigation();
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
  const pin = document.getElementById('authPinInput').value.trim();
  if (!isDemo && pin !== '84000') {
    showToast('Incorrect Passcode! Enter 84000');
    return;
  }

  const name = document.getElementById('authNameInput').value.trim() || 'Raj Verma';
  const cls = document.getElementById('authClassInput').value;
  const yr = document.getElementById('authYearInput').value;

  state.user.name = name;
  state.user.class = cls;
  state.user.year = yr;

  saveState();
  document.getElementById('authOverlay').classList.remove('active');
  renderAppUI();
  showToast('Welcome back, ' + name + '!');
}

function logoutUser() {
  document.getElementById('authOverlay').classList.add('active');
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
  document.getElementById('authNameInput').value = state.user.name || 'Raj Verma';
  document.getElementById('authClassInput').value = state.user.class || 'Class 12';
  document.getElementById('authYearInput').value = state.user.year || '2026';
  document.getElementById('profileDateSelector').value = state.user.selectedDate || new Date().toISOString().split('T')[0];
  document.getElementById('profileYearSelector').value = state.user.year || '2026';
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
    document.getElementById('themeToggle').checked = true;
  } else {
    document.body.classList.remove('dark-theme');
    document.getElementById('themeToggle').checked = false;
  }

  updateThemeMeta();

  const firstName = (state.user.name || 'Raj').split(' ')[0];
  const initial = firstName.charAt(0).toUpperCase();

  document.getElementById('headerAvatar').textContent = initial;
  document.getElementById('profileAvatarBig').textContent = initial;
  document.getElementById('headerUserName').textContent = firstName;
  document.getElementById('profileNameDisplay').textContent = state.user.name || 'Raj Verma';
  document.getElementById('profileGoalDisplay').textContent =
    `${state.user.class || 'Class 12'} • JEE Target ${state.user.year || '2026'}`;

  renderTasks();
  renderSyllabusProgress();
  renderNotes();
  renderPDFs();
}

function switchTabInternal(tabId) {
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  const targetPanel = document.getElementById(`view-${tabId}`);
  if (targetPanel) targetPanel.classList.add('active');

  document.querySelectorAll('.dock-item').forEach(i => i.classList.remove('active'));
  const targetDock = (tabId === 'note-reader' || tabId === 'subcards') ? 'notes' : tabId;
  document.getElementById(`dock-${targetDock}`)?.classList.add('active');

  document.getElementById('notifDrawer')?.classList.remove('active');
  document.getElementById('universalSearchResults')?.classList.remove('active');
  
  scrollToTop(true);
}

function switchTab(tabId) {
  if (isExitModalOpen) closeExitModal();
  switchTabInternal(tabId);

  if (!history.state || history.state.tab !== tabId) {
    history.pushState({ tab: tabId, isHome: tabId === 'home' }, '', '#' + tabId);
  }
}

function toggleNotifs() {
  document.getElementById('notifDrawer').classList.toggle('active');
  document.getElementById('notifDot').style.display = 'none';
}

function renderNotifications() {
  const list = document.getElementById('notifList');
  if (!list) return;
  list.innerHTML = '';
  if (state.notifications.length === 0) {
    list.innerHTML = `<div style="font-size:0.8rem; color:var(--text-sub); padding:10px;">No unread notifications.</div>`;
    document.getElementById('notifDot').style.display = 'none';
    return;
  }
  document.getElementById('notifDot').style.display = 'block';
  state.notifications.forEach(n => {
    const el = document.createElement('div');
    el.style.cssText = "font-size: 0.8rem; background: var(--card-subtle); padding: 12px; border-radius: 12px; border: 1px solid var(--border-color);";
    el.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-weight: 800;">${n.title}</div>
          <span style="font-size: 0.65rem; color: var(--text-muted);">${n.time}</span>
      </div>
      <div style="color: var(--text-sub); margin-top: 3px;">${n.desc}</div>
    `;
    list.appendChild(el);
  });
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
        document.getElementById('pomodoroTimerDisplay').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
  document.getElementById('pomodoroTimerDisplay').textContent = '25:00';
  showToast('Timer Reset');
}

/* ==========================================================================
   NOTES: CHAPTERS -> RICH SUB-CARDS SCREEN -> FULL INNERHTML READER SCREEN
   ========================================================================== */
function filterNotes(filter, btnEl) {
  state.activeNoteFilter = filter;
  if (btnEl) {
    btnEl.parentElement.querySelectorAll('.subject-tab').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  renderNotes();
}

function renderNotes() {
  const container = document.getElementById('notesContainer');
  if (!container) return;
  const query = (document.getElementById('notesSearchInput')?.value || '').toLowerCase();
  container.innerHTML = '';

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

  filtered.forEach(n => {
    const card = document.createElement('div');
    let cssSubClass = n.subject.toLowerCase();
    let iconBgClass = n.subject === 'Physics' ? 'physics-icon-bg' : (n.subject === 'Chemistry' ? 'chem-icon-bg' : 'math-icon-bg');

    card.className = `chapter-card-refined ${cssSubClass}`;
    const subCardsCount = n.chapter.subCards ? n.chapter.subCards.length : 0;

    card.onclick = () => openSubCardsScreen(n.id, n.subject);

    card.innerHTML = `
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
    `;
    container.appendChild(card);
  });
}

function openSubCardsScreen(chapterId, subject) {
  const loader = document.getElementById('cardLoaderOverlay');
  if (loader) loader.classList.add('active');

  setTimeout(() => {
    if (loader) loader.classList.remove('active');
    const chapter = state.chapters[subject].find(c => c.id === chapterId);
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
    if (!container) return;
    container.innerHTML = '';

    const subCardsCountBadge = document.getElementById('subCardCountBadge');
    if (subCardsCountBadge) subCardsCountBadge.textContent = `${chapter.subCards ? chapter.subCards.length : 0} Available`;

    if (chapter.subCards && chapter.subCards.length > 0) {
      chapter.subCards.forEach((sc, idx) => {
        const item = document.createElement('div');
        item.className = 'sub-card-item-rich';
        item.onclick = () => openSubCardReader(chapterId, subject, idx);
        item.innerHTML = `
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
        `;
        container.appendChild(item);
      });
    } else {
      container.innerHTML = `<div style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:20px;">No sub-cards available for this chapter yet.</div>`;
    }

    switchTab('subcards');
  }, 180);
}

function openSubCardReader(chapterId, subject, index) {
  const chapter = state.chapters[subject].find(c => c.id === chapterId);
  if (!chapter || !chapter.subCards[index]) return;

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
         Detailed content rendering via innerHTML is active. You can add HTML code, formulas, and diagrams here.
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
  container.innerHTML = '';

  const filtered = state.pdfs.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.subject.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:20px; font-size:0.8rem; color:var(--text-sub);">No PDFs matching your search.</div>`;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pdf-card-enhanced';
    card.innerHTML = `
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
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   UNIVERSAL SEARCH & TASKS MANAGERS
   ========================================================================== */
function handleUniversalSearch(q) {
  const overlay = document.getElementById('universalSearchResults');
  if (!q.trim()) {
    overlay.classList.remove('active');
    return;
  }

  const query = q.toLowerCase();
  overlay.innerHTML = '';
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
    matches.forEach(m => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.onclick = () => {
        overlay.classList.remove('active');
        if (m.type === 'Chapter') openSubCardsScreen(m.id, m.sub);
        else if (m.type === 'Sub-Card') openSubCardReader(m.id, m.sub, m.subIdx);
        else switchTab('pdfs');
      };
      item.innerHTML = `
        <div>
            <div style="font-size:0.85rem; font-weight:800;">${m.title}</div>
            <div style="font-size:0.72rem; color:var(--text-sub);">${m.sub}</div>
        </div>
        <span class="sub-card-badge-pill">${m.type}</span>
      `;
      overlay.appendChild(item);
    });
  }
  overlay.classList.add('active');
}

function renderTasks() {
  const list = document.getElementById('taskList');
  if (!list) return;
  list.innerHTML = '';
  if (state.tasks.length === 0) {
    list.innerHTML = `<p style="font-size:0.8rem; color:var(--text-sub); text-align:center; padding:10px;">No daily targets set.</p>`;
    return;
  }
  state.tasks.forEach(t => {
    const item = document.createElement('div');
    item.className = 'task-item';
    item.innerHTML = `
      <div class="task-check ${t.completed ? 'completed' : ''}" onclick="toggleTask(${t.id})">
          ${t.completed ? '✓' : ''}
      </div>
      <div>
          <div class="task-title ${t.completed ? 'completed' : ''}">${t.title}</div>
          <div style="font-size: 0.72rem; color: var(--text-sub); margin-top: 1px;">${t.sub}</div>
      </div>
    `;
    list.appendChild(item);
  });
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
  const title = document.getElementById('newTaskInput').value.trim();
  const sub = document.getElementById('newTaskSubInput').value.trim() || 'General Target';
  if (!title) {
    showToast('Please enter target title');
    return;
  }
  state.tasks.push({ id: Date.now(), title, sub, completed: false });
  saveState();
  renderTasks();
  closeModal('addTaskModal');
  document.getElementById('newTaskInput').value = '';
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

/* MODAL HELPERS & PROFILE PREFERENCES */
function openAddTaskModal() { document.getElementById('addTaskModal').classList.add('active'); }
function openEditProfileModal() {
  document.getElementById('editNameInput').value = state.user.name || 'Raj Verma';
  document.getElementById('editClassInput').value = state.user.class || 'Class 12';
  document.getElementById('editYearInput').value = state.user.year || '2026';
  document.getElementById('editProfileModal').classList.add('active');
}
function openAboutModal() { document.getElementById('aboutAppModal').classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function saveProfile() {
  state.user.name = document.getElementById('editNameInput').value.trim() || 'Raj Verma';
  state.user.class = document.getElementById('editClassInput').value;
  state.user.year = document.getElementById('editYearInput').value;
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

/* =========================================================
   EXIT PERMISSION ALERT MODAL (INNER HTML UI)
   ========================================================= */
function createExitModalUI() {
  if (document.getElementById('geniqExitModal')) return;

  const modal = document.createElement('div');
  modal.id = 'geniqExitModal';
  modal.style.cssText = `
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease, visibility 0.25s ease;
    padding: 20px;
    box-sizing: border-box;
  `;

  modal.innerHTML = `
    <div id="geniqExitCard" style="
      background: var(--card-bg, #ffffff);
      color: var(--text-main, #0f172a);
      width: 100%;
      max-width: 320px;
      border-radius: 24px;
      padding: 24px 20px 20px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      border: 1px solid var(--border-color, rgba(255,255,255,0.1));
      transform: scale(0.9);
      transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    ">
      <div style="
        width: 56px; height: 56px;
        background: rgba(239, 68, 68, 0.12);
        color: #ef4444;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        margin: 0 auto 14px auto;
      ">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </div>
      <h3 style="margin: 0 0 8px 0; font-size: 1.15rem; font-weight: 800; color: var(--text-main, #0f172a);">Exit App?</h3>
      <p style="margin: 0 0 20px 0; font-size: 0.82rem; color: var(--text-sub, #64748b); line-height: 1.4;">
        Kya aap GenIQ App se bahar jana chahte hain?
      </p>
      <div style="display: flex; gap: 10px;">
        <button id="cancelExitBtn" style="
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
        ">Cancel</button>
        <button id="confirmExitBtn" style="
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
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        ">Exit</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('cancelExitBtn').onclick = closeExitModal;
  document.getElementById('confirmExitBtn').onclick = confirmExitApp;
}

function showExitModal() {
  createExitModalUI();
  const modal = document.getElementById('geniqExitModal');
  const card = document.getElementById('geniqExitCard');
  if (!modal || isExitModalOpen) return;

  isExitModalOpen = true;
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
  if (card) card.style.transform = 'scale(1)';

  history.pushState({ isExitModal: true }, '', '#exit');
}

function closeExitModal() {
  const modal = document.getElementById('geniqExitModal');
  const card = document.getElementById('geniqExitCard');
  if (card) card.style.transform = 'scale(0.9)';
  if (modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.visibility = 'hidden';
      isExitModalOpen = false;
    }, 250);
  }
}

function confirmExitApp() {
  closeExitModal();
  if (window.navigator && window.navigator.app && typeof window.navigator.app.exitApp === 'function') {
    window.navigator.app.exitApp();
  } else if (window.Android && typeof window.Android.exitApp === 'function') {
    window.Android.exitApp();
  } else {
    showToast('App Exited');
    try { window.close(); } catch (e) { }
  }
}

/* =========================================================
   ANDROID HISTORY & BACK BUTTON NAVIGATION MANAGER
   ========================================================= */
function initAndroidNavigation() {
  createExitModalUI();

  if (!history.state || !history.state.tab) {
    history.replaceState({ tab: 'home', isHome: true }, '', '#home');
  }

  window.addEventListener('popstate', (e) => {
    if (isExitModalOpen) {
      closeExitModal();
      return;
    }

    if (e.state && e.state.tab) {
      switchTabInternal(e.state.tab);
    } else {
      showExitModal();
    }
  });
}

/* =========================================================
   GENIQ — Android Smooth Scroll & Touch Manager
   ========================================================= */
function initAndroidScroll() {
  let scrollTimer = null;
  let ticking = false;

  window.addEventListener('touchstart', () => {}, { passive: true });
  window.addEventListener('touchmove', () => {}, { passive: true });

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      ticking = false;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 120);
      document.body.classList.add('is-scrolling');
    });
  }, { passive: true });
}

function scrollToTop(smooth = true) {
  requestAnimationFrame(() => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
      });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  });
}

function scrollToElement(element, smooth = true) {
  if (!element) return;
  requestAnimationFrame(() => {
    try {
      element.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start',
        inline: 'nearest'
      });
    } catch (e) {
      element.scrollIntoView();
    }
  });
}

/* Expose Functions Globally for Inline HTML Handlers */
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