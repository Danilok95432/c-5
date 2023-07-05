import SimpleLightbox from "simplelightbox"

const galleries = document.querySelectorAll('.main-gallery')


if (galleries) {
  galleries.forEach(gallery => {
    const galleryImages = gallery.querySelectorAll('a')
    const simpleLightbox = new SimpleLightbox(galleryImages, {
      overlayOpacity: 0.85,
      showCounter: false,
    })
  })
}
