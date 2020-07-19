import './styles.css';
import {
  refs
} from './js/refs';
import services from './js/services.js';
import {
  updateAxiosMarkup
} from './js/updateAxiosMarkup';
import {
  buttonShowMore
} from './js/buttonShowMore';
import basiclightbox from './js/basicLightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'basiclightbox/dist/basicLightbox.min.js';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
PNotify.defaults.styling = 'bootstrap4';



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
      if (data.length > 0) {
        PNotify.success('Hey BRO, good choice!')
        updateAxiosMarkup(data);
        buttonShowMore.show();
        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth'
        });
      } else {
        PNotify.error(`We didn't find. Please, choise other theme of image...`)
        return
      }


    })
});

refs.ShowMore.addEventListener('click', (e) => {
  e.preventDefault();
  services.axoisImage(search).then(data => {
    PNotify.success('Wow, you want more!');
    updateAxiosMarkup(data);
  })
})


refs.gallery.addEventListener('click', basiclightbox.createModule);
window.addEventListener('keydown', basiclightbox.closeModal);
document.addEventListener('click', basiclightbox.closeModal);
