// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const itemImages = document.querySelector('.gallery');

const makeup = galleryItems
  .map(
    image => `<li class="gallery__item">
<a class="gallery__link" href="${image.original}">
   <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</li>`
  )
  .join('');
itemImages.insertAdjacentHTML('beforeend', makeup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
