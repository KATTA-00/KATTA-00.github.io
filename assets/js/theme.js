/* ========================================
   Theme Toggle JavaScript
   Dark/Light Mode with localStorage
   ======================================== */

(function() {
  'use strict';

  // Theme constants
  const THEME_KEY = 'portfolio-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Get system preference
  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
    return THEME_LIGHT;
  }

  // Get stored theme or system preference
  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === THEME_DARK || stored === THEME_LIGHT) {
        return stored;
      }
    } catch (e) {
      // localStorage not available
    }
    return getSystemTheme();
  }

  // Save theme to localStorage
  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // localStorage not available
    }
  }

  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update all theme toggle buttons
    const toggleButtons = document.querySelectorAll('.theme-toggle');
    toggleButtons.forEach(btn => {
      const icon = btn.querySelector('i');
      const text = btn.querySelector('span');
      
      if (icon) {
        icon.className = theme === THEME_DARK ? 'bi bi-sun' : 'bi bi-moon';
      }
      if (text) {
        text.textContent = theme === THEME_DARK ? 'Light Mode' : 'Dark Mode';
      }
    });
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || getStoredTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    
    applyTheme(newTheme);
    saveTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getStoredTheme();
    applyTheme(theme);
  }

  // Set up event listeners
  function setupThemeToggle() {
    // Add click listeners to all theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only update if user hasn't set a preference
        const stored = localStorage.getItem(THEME_KEY);
        if (!stored) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
  }

  // Initialize immediately (before DOM ready for flash prevention)
  initTheme();

  // Set up listeners when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggle);
  } else {
    setupThemeToggle();
  }

  // Expose toggle function globally
  window.toggleTheme = toggleTheme;
})();
