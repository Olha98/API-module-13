import './styles.css';
import {
  refs
} from './js/refs';
import services from './js/services.js'

import {
  updateAxiosMarkup
} from './js/updateAxiosMarkup'

refs.formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const currentForm = e.currentTarget;
  const inputVelue = currentForm.elements.query.value;
  console.log(inputVelue)
  refs.inputSearch.innerHTML = "";

  services.axoisImage(inputVelue).then(data => updateAxiosMarkup(data.data.hits))
    .catch(error => console.log(error));

});
