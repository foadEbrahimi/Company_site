
// hamburgerMenu
const ulMenu = document.getElementById("ulMenu");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const hamburgerClose = document.getElementById("hamburgerClose");
const navbar = document.getElementById("navbar");

hamburgerMenu.addEventListener("click", ulMenuOpened);
function ulMenuOpened() {
  ulMenu.classList.toggle("hidden");
  navbar.classList.toggle("h-60");
  navbar.classList.toggle("h-screen");
  hamburgerMenu.classList.add("hidden");
  hamburgerClose.classList.remove("hidden");
}
hamburgerClose.addEventListener("click", ulMenuClosed);
function ulMenuClosed() {
  ulMenu.classList.toggle("hidden");
  navbar.classList.toggle("h-24");
  navbar.classList.toggle("h-screen");
  hamburgerClose.classList.add("hidden");
  hamburgerMenu.classList.remove("hidden");
}


var swiper = new Swiper(".Cards", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn-slider-next",
    prevEl: ".btn-slider-prev",
  },
});
