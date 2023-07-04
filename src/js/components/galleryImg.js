import SimpleLightbox from "simplelightbox"


const homePage = document.querySelector('.home-page')


if (homePage) {
  const cafeGallery = homePage.querySelectorAll('.home-page .cafe__gallery a')

  const cafeLightbox = new SimpleLightbox(cafeGallery, {
    overlayOpacity: 0.85,
    showCounter: false,
  })

}

const restaurantPage = document.querySelector('.restaurant-page')


if (restaurantPage) {
  const restaurantGallery = restaurantPage.querySelectorAll('.restaurant-page .cafe__gallery a')

  const restaurantLightbox = new SimpleLightbox(restaurantGallery, {
    overlayOpacity: 0.85,
    showCounter: false,
  })

}