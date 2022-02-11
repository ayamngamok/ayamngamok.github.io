var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".testi-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
function openmakan() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  tab1.style.background = "#192a56";
  tab2.style.background = "#ce0101";
  content1.style.transitionDelay = "0.3s";
  content2.style.transitionDelay = "0s";
}
function openminum() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  tab1.style.background = "#ce0101";
  tab2.style.background = "#192a56";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0.3s";
}
