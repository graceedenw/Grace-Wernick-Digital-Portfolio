
/* ==========================================
   PORTFOLIO NAVIGATION DROPDOWN
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const dropdown = document.getElementById("portfolioDropdown");
  const toggle = document.getElementById("portfolioToggle");
  const menu = document.getElementById("portfolioMenu");

  if (!dropdown || !toggle || !menu) return;

  let closeTimer;

  const desktopHover = window.matchMedia(
    "(min-width: 761px) and (hover: hover) and (pointer: fine)"
  );

  /* Open the dropdown */

  function openDropdown() {

    clearTimeout(closeTimer);

    dropdown.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    menu.inert = false;

  }

  /* Close the dropdown */

  function closeDropdown() {

    clearTimeout(closeTimer);

    dropdown.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    menu.inert = true;

  }

  /* Hover interaction */

  dropdown.addEventListener("pointerenter", (event) => {

    if (desktopHover.matches && event.pointerType === "mouse") {
      openDropdown();
    }

  });

  dropdown.addEventListener("pointerleave", (event) => {

    if (desktopHover.matches && event.pointerType === "mouse") {

      closeTimer = setTimeout(() => {

        if (!menu.contains(document.activeElement)) {
          closeDropdown();
        }

      }, 250);

    }

  });

  /* Click and touchscreen interaction */

  toggle.addEventListener("click", () => {

    if (dropdown.classList.contains("open")) {
      closeDropdown();
    } else {
      openDropdown();
    }

  });

  /* Close when clicking outside */

  document.addEventListener("click", (event) => {

    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }

  });

  /* Close after selecting a menu option */

  menu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      closeDropdown();

    });

  });

  /* Keyboard accessibility */

  dropdown.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      closeDropdown();
      toggle.focus();

    }

    if (event.key === "ArrowDown" && event.target === toggle) {

      event.preventDefault();
      openDropdown();

      menu.querySelector("a")?.focus();

    }

  });

  /* Close when keyboard focus leaves */

  dropdown.addEventListener("focusout", (event) => {

    if (!dropdown.contains(event.relatedTarget)) {
      closeDropdown();
    }

  });

  /* Reset when changing screen sizes */

  desktopHover.addEventListener("change", closeDropdown);

});
