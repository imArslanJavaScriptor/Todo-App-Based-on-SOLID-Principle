import { useState } from 'react';
import { themeService } from '../services/ThemeService';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(themeService.getTheme() === 'dark');

  const toggle = () => {
    const newTheme = themeService.toggleTheme();
    setIsDark(newTheme === 'dark');
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;