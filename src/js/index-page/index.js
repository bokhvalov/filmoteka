import { processCurrentPage } from '../data-processing/processCurrentPage';
import { openModalFooter } from '../common/modal-footer';
import { getPopularMovies } from '../index-page/search';
import { openModal } from '../common/modal';
import { startPage } from '../pagination-js/counter-pagination';
import { renderItems } from '../common/renderItems';
import { searchMovies } from './search';
import goTopBtn from '../common/goTopBtn';
import Spinner from '../common/spinner';
import btnWhiteBlack from '../common/btn-white-black';
import controlColor from '../common/controlColor';

const spin = new Spinner();

export const APIKEY = '565e4989d784811de7dff7d665000157';
export const APIURL = 'https://api.themoviedb.org/';
export const refs = {
  mainContainer: document.querySelector('.filmoteka__container'),
  openModalBtn: document.querySelector('.modal-footer-open'),
  searchResultText: document.querySelector('.form-text'),
  form: document.querySelector('.header_search'),
};

refs.mainContainer.addEventListener('click', openModal);
refs.openModalBtn.addEventListener('click', openModalFooter);
refs.form.addEventListener('submit', searchMovies);


spin.spinOn();
renderPopularMovies();
setTimeout(startPage, 500);

export async function renderPopularMovies() {
  const popularMovies = await getPopularMovies(APIKEY);
  const currentPageContent = await processCurrentPage(popularMovies);

  renderItems(currentPageContent);
  spin.spinOff();

goTopBtn();
}
btnWhiteBlack();
controlColor();