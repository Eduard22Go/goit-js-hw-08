// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Створення розмітки
const galleryContainer = document.querySelector('.js-gallery');

createGalleryItemsMarkup();

function createGalleryItemsMarkup() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
}

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const onImageShow = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onShow: onImageShow => {
      document.addEventListener('keydown', onEscapeKeyPress);
    },

    onClose: onImageShow => {
      document.removeEventListener('keydown', onEscapeKeyPress);
    },
  });

  onImageShow.show();

  function onEscapeKeyPress(event) {
    if (event.code !== 'Escape') {
      return;
    }
    onImageShow.close();
  }
}
