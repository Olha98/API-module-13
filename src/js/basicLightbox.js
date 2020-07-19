import * as basicLightbox from 'basiclightbox'
import {
  refs
} from './refs';

export default {
  createModule(e) {

    if (e.target.nodeName === 'IMG') {
      let largeImg = e.target.getAttribute("href");
      const instance = basicLightbox.create(`<img src="${largeImg}" width="800" height="600">`)
      instance.show()



    }
  },
  closeModal(e) {
    if (e.target.nodeName !== 'IMG' || e.key === "Escape" || e.target === e.currentTarget) {
      // console.log('img...key');
      // console.log(e.key);
      // console.log(e.target.nodeName);
      // console.log(e.target);
      // refs.basiclightbox.classList.add('is-hidden');
      document.removeEventListener('click', this.createModule);
    }
  }

}
