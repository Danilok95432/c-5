import { Swiper } from "swiper/bundle"
// Инициализация слайдеров

const swiperRooms = new Swiper('.rooms-swiper', {
  navigation: {
    nextEl: '.rooms-swiper__swiper-button-next',
    prevEl: '.rooms-swiper__swiper-button-prev'
  },

  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  initialSlide: 1,
  breakpoints: {
    1024: {
      slidesPerView: 1.2,
      spaceBetween: 0
    },
    1280: {
      spaceBetween: 0,
      slidesPerView: 1.32,
    },
    1600: {
      spaceBetween: 0,
      slidesPerView: 1.56,
    },
  },

})

const roomsListSwiper = new Swiper('.rooms-list__swiper', {
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})
