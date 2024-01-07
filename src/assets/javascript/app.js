"use strict";
const $ = document;
const CardContainer = $.querySelector(".Cards");
const Cards = $.querySelectorAll(".Card");
const btnRight = $.querySelector(".btn-slider-next");
const btnLeft = $.querySelector(".btn-slider-prev");

// Functions
let curSlide = 0;
const maxSlide = Cards.length;
const goToSlide = function (slide) {
  Cards.forEach((s, i) => {
    s.style.transform = `translateX(${30 * (i - slide)}%)`;
    s.style.transition = "all .5s ease-in";
  });
};
goToSlide(0);
const NextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") NextSlide();
  e.key === "ArrowLeft" && prevSlide();
});
btnRight.addEventListener("click", NextSlide);
btnLeft.addEventListener("click", prevSlide);
