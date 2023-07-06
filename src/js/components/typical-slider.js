const btnSliderSow = document.querySelector(".typical__images-btn");
const slider = document.querySelector(".slider");

if (slider) {
  const sliderShow = () => {
    slider.classList.add("_active");
    document.body.style.overflow = "hidden";
  };

  const sliderHide = () => {
    slider.classList.remove("_active");
    document.body.style.overflow = "";
  };

  btnSliderSow.addEventListener("click", sliderShow);

  document.addEventListener("click", ({ target }) => {
    if (
      (target && target.classList.contains("slider__btn-close")) ||
      target.classList.contains("slider")
    ) {
      sliderHide();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && slider.classList.contains("_active")) {
      sliderHide();
    }
  });
}
