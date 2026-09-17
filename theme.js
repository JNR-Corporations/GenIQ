function loadTheme() {
  try {
    const savedUser = JSON.parse(localStorage.getItem('geniq_user') || '{}');
    const theme = savedUser.theme === 'dark' ? 'dark' : 'light';

    document.body.classList.toggle('dark-theme', theme === 'dark');
    updateThemeIcon(theme === 'dark');
  } catch (e) {
    document.body.classList.remove('dark-theme');
    updateThemeIcon(false);
  }
}

function toggleTheme(isDark) {
  const theme = isDark ? 'dark' : 'light';

  try {
    const savedUser = JSON.parse(localStorage.getItem('geniq_user') || '{}');
    savedUser.theme = theme;
    localStorage.setItem('geniq_user', JSON.stringify(savedUser));
  } catch (e) {
    console.error('Theme save error:', e);
  }

  document.body.classList.toggle('dark-theme', isDark);
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const themeIcon = document.getElementById('themeIcon');
  const themeBtn = document.getElementById('themeBtn');

  if (!themeIcon || !themeBtn) return;

  themeBtn.setAttribute(
    'aria-label',
    isDark ? 'Switch to light theme' : 'Switch to dark theme'
  );

  themeIcon.innerHTML = isDark
    ? '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"></path>'
    : '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>';
}

function initTheme() {
  loadTheme();

  const themeBtn = document.getElementById('themeBtn');
  if (!themeBtn) return;

  themeBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    toggleTheme(isDark);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme, { once: true });
} else {
  initTheme();
}