const hamburger = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const navMenu = document.querySelector(".header-links nav");
const navLinks = document.querySelectorAll(".header-links nav ul li ");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-clicked");
  navMenu.classList.toggle("active");
  close.classList.toggle("cross-clicked");
});

close.addEventListener("click", () => {
  close.classList.toggle("cross-clicked");
  hamburger.classList.toggle("hamburger-clicked");
  navMenu.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 1200px)").matches) {
    closeMenu();
  }
});
if (window.matchMedia("(max-width: 1200px)").matches) {
  closeMenu();
}
function closeMenu() {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("hamburger-clicked");
      navMenu.classList.remove("active");
      close.classList.toggle("cross-clicked");
    });
  });
}
