document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('portfolioDropdown');
  const toggle = document.getElementById('portfolioToggle');
  const menu = document.getElementById('portfolioMenu');

  if (!root || !toggle || !menu) return;

  const groups = [...menu.querySelectorAll('.submenu-group')];
  const desktop = matchMedia(
    '(min-width: 761px) and (hover: hover) and (pointer: fine)'
  );

  let timer;

  function expand(group) {
    groups.forEach(g => {
      const on = g === group;

      g.classList.toggle('expanded', on);
      g.querySelector('button').setAttribute(
        'aria-expanded', String(on)
      );

      const panel = g.querySelector('.submenu-panel');
      panel.inert = !on;

      if (on) {
        panel.classList.remove('flip-left');

        if (
          innerWidth > 760 &&
          g.getBoundingClientRect().right + 320 > innerWidth - 12
        ) {
          panel.classList.add('flip-left');
        }
      }
    });
  }

  function open() {
    clearTimeout(timer);
    root.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.inert = false;
  }

  function close() {
    clearTimeout(timer);
    expand(null);
    root.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.inert = true;
  }

  root.addEventListener('pointerenter', e => {
    if (desktop.matches && e.pointerType === 'mouse') {
      open();
    }
  });

  root.addEventListener('pointerleave', e => {
    if (desktop.matches && e.pointerType === 'mouse') {
      timer = setTimeout(() => {
        if (!root.contains(document.activeElement)) {
          close();
        }
      }, 300);
    }
  });

  toggle.addEventListener('click', () => {
    root.classList.contains('open') ? close() : open();
  });

  groups.forEach(g => {
    const button = g.querySelector('button');

    g.addEventListener('pointerenter', e => {
      if (desktop.matches && e.pointerType === 'mouse') {
        expand(g);
      }
    });

    button.addEventListener('click', () => {
      if (
        desktop.matches &&
        g.classList.contains('expanded')
      ) return;

      expand(g.classList.contains('expanded') ? null : g);
    });

    button.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        expand(g);
        g.querySelector('.submenu-panel a').focus();
      }
    });
  });

  menu.querySelector(':scope > a')
    .addEventListener('pointerenter', () => {
      if (desktop.matches) expand(null);
    });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', close);
  });

  document.addEventListener('pointerdown', e => {
    if (!root.contains(e.target)) close();
  });

  root.addEventListener('focusout', e => {
    if (!root.contains(e.relatedTarget)) close();
  });

  root.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault();

      const g = groups.find(g =>
        g.classList.contains('expanded')
      );

      if (g) {
        expand(null);
        g.querySelector('button').focus();
      } else {
        close();
        toggle.focus();
      }
    }

    if (e.key === 'ArrowDown' && e.target === toggle) {
      e.preventDefault();
      open();
      menu.querySelector('a').focus();
    }

    if (
      e.key === 'ArrowLeft' &&
      e.target.closest('.submenu-panel')
    ) {
      e.preventDefault();
      const g = e.target.closest('.submenu-group');
      expand(null);
      g.querySelector('button').focus();
    }
  });

  desktop.addEventListener('change', close);
});
