import SimpleLightbox from "simplelightbox"


const homePage = document.querySelector('.home-page')


if (homePage) {
  const cafeGallery = homePage.querySelectorAll('.home-page .cafe__gallery a')

  const cafeLightbox = new SimpleLightbox(cafeGallery, {
    overlayOpacity: 0.85,
    showCounter: false,
  })

}
