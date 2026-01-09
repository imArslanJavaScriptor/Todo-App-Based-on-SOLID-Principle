// services/ThemeService.js
class ThemeService {
  getTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  toggleTheme() {
    const newTheme = this.getTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
    return newTheme;
  }
}

export const themeService = new ThemeService();