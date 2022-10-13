import { fetchSearch } from './themoviedbAPI';
import { processCurrentPage } from '../data-processing/processCurrentPage';
import { APIKEY } from '.';
import { refs } from '.';
import { startPage } from '../pagination-js/counter-pagination';
import { renderItems } from '../common/renderItems';
import { renderPopularMovies } from '.';
import localStrg from '../localStorage/localStrg';
import Spinner from '../common/spinner';

const spin = new Spinner();

export let pageCount;

let searchQuery = '';

export async function searchMovies(event) {
  event.preventDefault();
  spin.spinOn();
  searchQuery = event.target.search.value;
  refs.searchResultText.classList.add('visually-hidden');

  if(!searchQuery){
    renderPopularMovies();
    spin.spinOff();
    return
  }

  const searchResult = await getSearchMovies();
  const currentPageContent= await processCurrentPage (searchResult);

  if (currentPageContent.length > 0) {
    renderItems(currentPageContent);
    startPage();
    spin.spinOff();
    return;
  }
  refs.searchResultText.classList.remove('visually-hidden');
  spin.spinOff();
}

export async function getSearchMovies() {
  const popularMovies = await fetchSearch(APIKEY, searchQuery);
  pageCount = popularMovies.total_pages;

  return popularMovies.results
}