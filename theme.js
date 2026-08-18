function loadTheme() {
  try {
    const savedUser = localStorage.getItem('geniq_user');
    const theme = savedUser ? JSON.parse(savedUser).theme : 'light';

    document.body.classList.toggle('dark-theme', theme === 'dark');
  } catch (e) {
    document.body.classList.remove('dark-theme');
  }
}

function toggleTheme(isDark) {
  const theme = isDark ? 'dark' : 'light';

  try {
    const savedUser = JSON.parse(localStorage.getItem('geniq_user') || '{}');

    savedUser.theme = theme;

    localStorage.setItem('geniq_user', JSON.stringify(savedUser));

    document.body.classList.toggle('dark-theme', isDark);
  } catch (e) {
    console.error('Theme error:', e);
  }
}

document.addEventListener('DOMContentLoaded', loadTheme);