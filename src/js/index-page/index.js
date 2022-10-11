import { processCurrentPage } from '../data-processing/processCurrentPage';
import { openModalFooter } from '../common/modal-footer';
import { getPopularMovies } from './getPopularMovies';
import { openModal } from '../common/modal';
import { startPage } from '../pagination-js/counter-pagination';
import { renderItems } from '../common/renderItems';
import { searchMovies } from './search';
import localStrg from '../common/localStrg';
import goTopBtn from '../common/goTopBtn';
import preLoader from '../common/preloader';


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

renderPopularMovies();
goTopBtn();
preLoader();

export async function renderPopularMovies() {
  const popularMovies = await getPopularMovies(APIKEY);
  const currentPageContent= await processCurrentPage (popularMovies);

  renderItems(currentPageContent);
  startPage();
}
