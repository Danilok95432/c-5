import SimpleLightbox from "simplelightbox";

const cafeGallery = document.querySelectorAll('.home-page .cafe__gallery a')

if (cafeGallery) {
  const cafeLightbox = new SimpleLightbox(cafeGallery, {
    overlayOpacity: 0.85,
    showCounter: false,
  });

}
