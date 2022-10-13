import { fetchSearch } from './themoviedbAPI';
import { processCurrentPage } from '../data-processing/processCurrentPage';
import { APIKEY } from '.';
import { refs } from '.';
import { startPage } from '../pagination-js/counter-pagination';
import { renderItems } from '../common/renderItems';
import { renderPopularMovies } from '.';
import localStrg from '../localStorage/localStrg';
import { fetchPopular } from './themoviedbAPI';
import { decodeGenres } from '../data-processing/decodeGenres';

import { APIKEY } from './index';

export let pageCount;
export let searchQueryPagination = '';

let searchQuery = '';

export async function searchMovies(event) {
  event.preventDefault();
  searchQuery = event.target.search.value;
  refs.searchResultText.classList.add('visually-hidden');

  if (!searchQuery) {
    renderPopularMovies();
    startPage();
    searchQueryPagination = '';
    return;
  }

  const searchResult = await getSearchMovies();
  const currentPageContent = await processCurrentPage(searchResult);

  if (searchResult.length > 0) {
    searchQueryPagination = event.target.search.value;
  }

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
  return popularMovies.results;
}

export async function getPopularMovies(APIKEY) {
  const popularMovies = await fetchPopular(APIKEY);
  pageCount = popularMovies.total_pages;
  return popularMovies.results;
}
