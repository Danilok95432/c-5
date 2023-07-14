const findResForm = document.querySelector(".find-res-form");

if (findResForm) {
  window.addEventListener("scroll", () => {
    let formCoord = findResForm.getBoundingClientRect().y + 200;

    if (scrollY > formCoord) {
      findResForm.classList.add("_fixed");
    } else {
      findResForm.classList.remove("_fixed");
    }
  });
}

// анимация бургера

const burgerOpen = document.querySelector(".main-menu__burger-btn");
const burgerClose = document.querySelector(".main-menu__nav-btn-close");
const navigationList = document.querySelector(".main-menu__nav");

if (burgerOpen) {
  burgerOpen.addEventListener("click", () => {
    navigationList.classList.add("_active");
    document.body.style.overflow = "hidden";
  });
  burgerClose.addEventListener("click", () => {
    navigationList.classList.remove("_active");
    document.body.style.overflow = "";
  });
}
