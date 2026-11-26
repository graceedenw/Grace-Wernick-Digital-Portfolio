(() => {
  const root = document.documentElement;
  const key = 'portfolio-theme';
  let theme = 'light';

  try {
    if (localStorage.getItem(key) === 'midnight') {
      theme = 'midnight';
    }
  } catch (_) {}

  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.theme-toggle');

    function apply(next) {
      theme = next;
      root.dataset.theme = next;

      buttons.forEach(button => {
        button.hidden = false;

        button.setAttribute(
          'aria-pressed',
          String(next === 'midnight')
        );

        button.title = next === 'midnight'
          ? 'Switch to Light Mode'
          : 'Switch to Midnight Mode';
      });
    }

    apply(theme);

    window.addEventListener('storage', event => {
      if (event.key === key || event.key === null) {
        apply(event.newValue === 'midnight' ? 'midnight' : 'light');
      }
    });
    window.addEventListener('pageshow', () => {
      try { apply(localStorage.getItem(key) === 'midnight' ? 'midnight' : 'light'); } catch (_) {}
    });

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        apply(theme === 'midnight' ? 'light' : 'midnight');

        try {
          localStorage.setItem(key, theme);
        } catch (_) {}
      });
    });

    requestAnimationFrame(() => {
      root.classList.add('theme-ready');
    });
  });
})();
