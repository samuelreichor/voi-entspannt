var swiper1 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination1",
    dynamicBullets: true,
    
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});


var swiper2 = new Swiper(".swiper2", {
  spaceBetween: 0,
  centeredSlides: true,
  rewind: true,
  autoplay: {
    delay: 5000,
    
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination2",
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2"
  }
});