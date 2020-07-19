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


let search = '';
refs.formSearch.addEventListener('submit', (e) => {
  e.preventDefault();

  const currentForm = e.currentTarget;
  search = currentForm.elements.query.value;
  refs.gallery.innerHTML = '';
  // form.reset();
  services.getPage();
  buttonShowMore.disable();
  buttonShowMore.buttonShow();

  services.axoisImage(search)
    .then(data => {
      updateAxiosMarkup(data);
      buttonShowMore.show();
    })
});

refs.ShowMore.addEventListener('click', () => {
  services.axoisImage(search).then(data => {
    updateAxiosMarkup(data);
  })

})
