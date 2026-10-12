/**
 * Harambi static site — minimal interactions
 * Mobile nav toggle only (no framework)
 */
(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-nav-mobile]");
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    var willOpen = !menu.classList.contains("is-open");
    setOpen(willOpen);
    // Return focus to the toggle when the menu is closed from the toggle
    if (!willOpen) toggle.focus();
  });

  // Close mobile menu when a link is clicked
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  // Close on Escape and return focus to the toggle
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
