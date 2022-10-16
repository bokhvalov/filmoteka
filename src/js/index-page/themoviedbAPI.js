import { APIURL } from './index';
import localStrg from '../localStorage/localStrg';
import { PAGE } from '../pagination-js/main-pagination';

export async function fetchPopular(token) {
  return await (
    await fetch(APIURL + `3/trending/movie/day?api_key=${token}&page=${PAGE}`)
  ).json();
}

export async function fetchGenresList(token) {
  const response = await (
    await fetch(APIURL + `3/genre/movie/list?api_key=${token}&language=en-US`)
  ).json();
  localStrg.save('genresList', response.genres);
  console.log('Genres were updated, and saved to localStorage for future');
  return response.genres;
}

export async function fetchSearch(token, name) {
  const response = await (
    await fetch(
      APIURL + `3/search/movie?api_key=${token}&language=en-US&query=${name}`
    )
  ).json();
  return response;
}

/* функция расширенного запроса с учетом жанра, года релиза,  ключевого слова */
export async function fetchExtendedSearch(
  token,
  genre = 'none',
  year = 0,
  keyword = 0
) {
  let apiString = APIURL + `3/discover/movie?api_key=${token}&language=en-US`;
  if (year !== 0) {
    apiString = apiString + `&primary_release_year=${year}`;
  }
  if (genre !== 'none') {
    apiString = apiString + `&with_genres=${genre}`;
  }
  if (keyword !== 0) {
    apiString = apiString + `&with_keywords=${keyword}`;
  }
  const response = await (await fetch(apiString)).json();
  return response;
}
/* функция поска ключевого слова */
export async function fetchKeyWordsSearch(token, query) {
  const response = await (
    await fetch(
      APIURL + `3/search/keyword?api_key=${token}&language=en-US&query=${query}`
    )
  ).json();
  return response;
}
