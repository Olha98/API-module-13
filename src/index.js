import './styles.css';
import {
  refs
} from './js/refs';
import services from './js/services.js'
import {
  updateAxiosMarkup
} from './js/updateAxiosMarkup'
import {
  buttonShowMore
} from './js/buttonShowMore'
import basiclightbox from './js/basicLightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'basiclightbox/dist/basicLightbox.min.js';



let search = '';
refs.formSearch.addEventListener('submit', (e) => {
  e.preventDefault();

  const currentForm = e.currentTarget;
  search = currentForm.elements.query.value;
  refs.gallery.innerHTML = '';
  // refs.formSearch.reset();
  services.getPage();
  buttonShowMore.disable();
  buttonShowMore.buttonShow();

  services.axoisImage(search)
    .then(data => {
      updateAxiosMarkup(data);
      buttonShowMore.show();
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth'
      });
    })
});

refs.ShowMore.addEventListener('click', () => {
  services.axoisImage(search).then(data => {
    updateAxiosMarkup(data);
  })
})


refs.gallery.addEventListener('click', basiclightbox.createModule);
window.addEventListener('keydown', basiclightbox.closeModal);
document.addEventListener('click', basiclightbox.closeModal);
