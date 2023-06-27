import PhotoSwipeLightbox from 'photoswipe/lightbox';
// Plugins

const cafeGallery = document.querySelector('.home-page .cafe__gallery')

if (cafeGallery) {

  const lightbox = new PhotoSwipeLightbox({
    gallery: cafeGallery,
    children: 'a',
    pswpModule: () => import('photoswipe')
  });
  lightbox.init();


}
