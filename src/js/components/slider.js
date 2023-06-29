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

const servicesSwiper = new Swiper('.services__swiper', {
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})