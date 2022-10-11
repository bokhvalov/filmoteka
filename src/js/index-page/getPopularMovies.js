import { fetchPopular } from './themoviedbAPI';
import { decodeGenres } from '../data-processing/decodeGenres';

import { APIKEY } from './index';

export let pageCount;

export async function getPopularMovies(APIKEY) {
  const popularMovies = await fetchPopular(APIKEY);
  pageCount = popularMovies.total_pages;
  return popularMovies.results;
}
