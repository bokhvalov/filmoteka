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
import Spinner from '../common/spinner';

/* расширенный поиск */
import { fetchExtendedSearch } from './themoviedbAPI';

const spin = new Spinner();


export let pageCount;
export let searchQueryPagination = '';

let searchQuery = '';

export async function searchMovies(event) {
  event.preventDefault();
  spin.spinOn();
  searchQuery = event.target.search.value;
  refs.searchResultText.classList.add('visually-hidden');

  if (!searchQuery) {
    renderPopularMovies();

    startPage();
    searchQueryPagination = '';
    spin.spinOff();
    return

  }

  const searchResult = await getSearchMovies();
  const currentPageContent = await processCurrentPage(searchResult);

  if (searchResult.length > 0) {
    searchQueryPagination = event.target.search.value;
  }

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
  return popularMovies.results;
}

export async function getPopularMovies(APIKEY) {
  const popularMovies = await fetchPopular(APIKEY);
  pageCount = popularMovies.total_pages;
  return popularMovies.results;
}


/* расширенный поиск */
export async function getExtSearchMovies(APIKEY,genre,year,keyword) {
  const extSearchMovies = await fetchExtendedSearch(APIKEY,genre,year,keyword);
  pageCount = extSearchMovies.total_pages;
  return extSearchMovies.results;
}

