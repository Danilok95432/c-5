import {Swiper} from "swiper/bundle";


// Инициализация слайдеров

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