import gallery from "./gallery-items.js";

const ul = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lbImage = document.querySelector(".lightbox___image")
let fragment = document.createDocumentFragment();
const closePictureBtn = document.querySelector('button[data-action="close-lightbox"]');
ul.addEventListener('click', openModal);
closePictureBtn.addEventListener('click', closeModal)
lightbox.addEventListener('click', handleClose);


function openModal(e) {
    lightbox.classList.add('is-open');
    lbImage.src = e.target.dataset.source;
    window.addEventListener('keydown', handleButtonPress);
}

function closeModal() {
    lightbox.classList.remove('is-open');
    window.removeEventListener('keydown', handleButtonPress);
}

function handleClose (e) {
    if(e.target === lbImage) {
        return;
    }

    closeModal();
}

function handleButtonPress(e) {
    if(e.code !== 'Escape') {
    return;
    }

    closeModal();
}

gallery.forEach((galleryItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const span = document.createElement('span')
    const i = document.createElement('i')
    li.classList.add('gallery__item');
    a.classList.add('gallery__link');
    img.classList.add('gallery__image');
    img.src = galleryItem.preview;
    img.dataset.source = galleryItem.original;
    img.alt = galleryItem.description;
    span.classList.add('gallery__icon');
    i.classList.add('material-icons');
    li.appendChild(a);
    a.append(img, span);
    span.appendChild(i);
    fragment.append(li);
});

ul.prepend(fragment);