import tamples from '../tamplate/tamplate.hbs'
import {
  refs
} from './refs';

export function updateAxiosMarkup(hits) {
  const markUp = tamples(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markUp);
}
