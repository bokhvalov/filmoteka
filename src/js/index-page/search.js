import { fetchSearch } from './themoviedbAPI';
import { processCurrentPage } from '../data-processing/processCurrentPage';
import { APIKEY } from '.';
import { refs } from '.';
import { startPage } from '../pagination-js/counter-pagination';
import { renderItems } from '../common/renderItems';
import { renderPopularMovies } from '.';
import localStrg from '../localStorage/localStrg';

export let pageCount;

let searchQuery = '';

export async function searchMovies(event) {
  event.preventDefault();
  searchQuery = event.target.search.value;
  refs.searchResultText.classList.add('visually-hidden');

  if(!searchQuery){
    renderPopularMovies();
    return
  }

  const searchResult = await getSearchMovies();
  const currentPageContent= await processCurrentPage (searchResult);

  if (currentPageContent.length > 0) {
    renderItems(currentPageContent);
    startPage();
    return;
  }
  refs.searchResultText.classList.remove('visually-hidden');
}

export async function getSearchMovies() {
  const popularMovies = await fetchSearch(APIKEY, searchQuery);
  pageCount = popularMovies.total_pages;

  return popularMovies.results
}