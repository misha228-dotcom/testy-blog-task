const burgerBtn = document.getElementById("burger-btn");

const nav = document.getElementById("nav");

const navLinks = document.querySelectorAll(".nav-link");

// Відкриття / закриття при кліку на кнопку

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("is-open");

  const isOpen = nav.classList.contains("is-open");

  burgerBtn.setAttribute(
    "aria-label",
    isOpen ? "Закрити меню" : "Відкрити меню",
  );
});

// Закриття при кліку на пункт меню

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");

    burgerBtn.setAttribute("aria-label", "Відкрити меню");
  });
});

// Закриття при кліку поза меню

document.addEventListener("click", (e) => {
  const isOutside = !nav.contains(e.target) && !burgerBtn.contains(e.target);

  if (isOutside) {
    nav.classList.remove("is-open");

    burgerBtn.setAttribute("aria-label", "Відкрити меню");
  }
});
