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
// import {basicLightbox} from './js/basicLightbox'
import 'basiclightbox/dist/basicLightbox.min.css';
import 'basiclightbox/dist/basicLightbox.min.js';
import * as basicLightbox from 'basiclightbox'


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


refs.gallery.addEventListener('click', createModule)

function createModule(e) {
  if (e.target.nodeName === 'IMG') {
    let largeImg = e.target.getAttribute("href");
    console.log(largeImg)
    const instance = basicLightbox.create(`<img src="${largeImg}" width="800" height="600">`)
    instance.show()
  }

}

