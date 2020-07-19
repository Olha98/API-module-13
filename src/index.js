import './styles.css';
import {
  refs
} from './js/refs';
import services from './js/services.js'

import {
  updateAxiosMarkup
} from './js/updateAxiosMarkup'

let search = '';
refs.formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const currentForm = e.currentTarget;
  search = currentForm.elements.query.value;


  refs.gallery.innerHTML = '';
  // form.reset();
  services.getPage();


  services.axoisImage(search)
    .then(data => {
      console.log(data)
      updateAxiosMarkup(data);

    })

  refs.ShowMore.classList.remove('is-hidden');

});

refs.ShowMore.addEventListener('click', () => {
  services.axoisImage(search).then(data => {
    updateAxiosMarkup(data);
  })

})
