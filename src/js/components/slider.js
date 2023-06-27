import { Swiper } from "swiper/bundle"
// Инициализация слайдеров

const swiperRooms = new Swiper('.rooms-swiper', {
  navigation: {
    nextEl: '.rooms-swiper__swiper-button-next',
    prevEl: '.rooms-swiper__swiper-button-prev'
  },

  slidesPerView: 1.56,
  centeredSlides: true,
  spaceBetween: 0,
  initialSlide: 1,

})

