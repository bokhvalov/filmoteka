import { processCurrentPage } from '../data-processing/processCurrentPage';
import { APIKEY } from '../index-page/index';
import { APIURL } from '../index-page/index';
import { renderItems } from '../common/renderItems';
import { PAGE } from './main-pagination';
import { searchQueryPagination } from '../index-page/search';

export async function searchMoviesPagination(event) {
  event.preventDefault();
  // console.log(searchQueryPagination);
  const searchResult = await getSearchMoviesPagination();
  // console.log(searchResult);
  const currentPageContent = await processCurrentPage(searchResult);

  if (currentPageContent.length > 0) {
    renderItems(currentPageContent);
    return;
  }
}

async function getSearchMoviesPagination() {
  const popularMovies = await fetchSearchPagination(APIKEY);
  return popularMovies.results;
}

async function fetchSearchPagination(token) {
  const response = await (
    await fetch(
      APIURL +
        `3/search/movie?api_key=${token}&language=en-US&query=${searchQueryPagination}&page=${PAGE}`
    )
  ).json();
  return response;
}
