import lightGallery from "lightgallery";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";

const galleries = document.querySelectorAll(".main-gallery");
const roomGallery = document.querySelector(".rooms-swiper-container");

if (roomGallery && roomGallery.classList.contains("main-gallery")) {
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
    lightGallery(roomGallery, {
      selector: "a", // обязательно!
      plugins: [lgThumbnail],
      counter: false,
      download: false,
      thumbnail: true,
      thumbHeight: "150px",
      thumbWidth: 240,
      thumbMargin: 8,
      thumbnail: !mobileMediaQuery.matches,
      prevHtml:
        '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M24.3466 17.1732L25.1074 17.8254L18.1509 25.108L25.1074 32.3906L24.3466 33.1514L16.6291 25.108L24.3466 17.1732Z" fill="#808994"/>\n' +
        '<path d="M25 0C38.8043 0 50 11.1957 50 25C50 38.8043 38.8043 50 25 50C11.1957 50 0 38.8043 0 25C0 11.1957 11.3043 0 25 0ZM25 48.913C38.1522 48.913 48.913 38.1522 48.913 25C48.913 11.8478 38.1522 1.08696 25 1.08696C11.8478 1.08696 1.08696 11.8478 1.08696 25C1.08696 38.1522 11.8478 48.913 25 48.913Z" fill="#808994"/>\n' +
        '<path d="M17.2822 25.6514H30.8691V24.5644H17.2822V25.6514Z" fill="#808994"/>\n' +
        "</svg>\n",
      nextHtml:
        '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M25.6534 32.8268L24.8926 32.1746L31.8491 24.892L24.8926 17.6094L25.6534 16.8486L33.3709 24.892L25.6534 32.8268Z" fill="#808994"/>\n' +
        '<path d="M25 50C11.1957 50 0 38.8043 0 25C0 11.1957 11.1957 0 25 0C38.8043 0 50 11.1957 50 25C50 38.8043 38.6957 50 25 50ZM25 1.08696C11.8478 1.08696 1.08696 11.8478 1.08696 25C1.08696 38.1522 11.8478 48.913 25 48.913C38.1522 48.913 48.913 38.1522 48.913 25C48.913 11.8478 38.1522 1.08696 25 1.08696Z" fill="#808994"/>\n' +
        '<path d="M32.7178 24.3486H19.1309V25.4356H32.7178V24.3486Z" fill="#808994"/>\n' +
        "</svg>\n",
    });
  });
} else {
  if (galleries) {
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

    galleries.forEach((gallery) => {
      lightGallery(gallery, {
        plugins: [lgThumbnail],
        counter: false,
        download: false,
        thumbHeight: "150px",
        thumbWidth: 240,
        thumbMargin: 8,
        thumbnail: !mobileMediaQuery.matches,
        prevHtml:
          '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M24.3466 17.1732L25.1074 17.8254L18.1509 25.108L25.1074 32.3906L24.3466 33.1514L16.6291 25.108L24.3466 17.1732Z" fill="#808994"/>\n' +
          '<path d="M25 0C38.8043 0 50 11.1957 50 25C50 38.8043 38.8043 50 25 50C11.1957 50 0 38.8043 0 25C0 11.1957 11.3043 0 25 0ZM25 48.913C38.1522 48.913 48.913 38.1522 48.913 25C48.913 11.8478 38.1522 1.08696 25 1.08696C11.8478 1.08696 1.08696 11.8478 1.08696 25C1.08696 38.1522 11.8478 48.913 25 48.913Z" fill="#808994"/>\n' +
          '<path d="M17.2822 25.6514H30.8691V24.5644H17.2822V25.6514Z" fill="#808994"/>\n' +
          "</svg>\n",
        nextHtml:
          '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M25.6534 32.8268L24.8926 32.1746L31.8491 24.892L24.8926 17.6094L25.6534 16.8486L33.3709 24.892L25.6534 32.8268Z" fill="#808994"/>\n' +
          '<path d="M25 50C11.1957 50 0 38.8043 0 25C0 11.1957 11.1957 0 25 0C38.8043 0 50 11.1957 50 25C50 38.8043 38.6957 50 25 50ZM25 1.08696C11.8478 1.08696 1.08696 11.8478 1.08696 25C1.08696 38.1522 11.8478 48.913 25 48.913C38.1522 48.913 48.913 38.1522 48.913 25C48.913 11.8478 38.1522 1.08696 25 1.08696Z" fill="#808994"/>\n' +
          '<path d="M32.7178 24.3486H19.1309V25.4356H32.7178V24.3486Z" fill="#808994"/>\n' +
          "</svg>\n",
      });
    });
  }
}
