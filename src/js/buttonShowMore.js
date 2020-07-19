import {
  refs
} from './refs';


export const buttonShowMore = {
  show() {
    refs.ShowMore.disabled = false;
    refs.textButton.textContent = 'Search more';
    refs.spinner.classList.add('is-hidden');
  },
  disable() {
    refs.ShowMore.disabled = true;
    refs.spinner.classList.remove('is-hidden');
    refs.textButton.textContent = 'Loading...';
  },
  buttonShow(){
    refs.ShowMore.classList.remove('is-hidden')
  }
}
