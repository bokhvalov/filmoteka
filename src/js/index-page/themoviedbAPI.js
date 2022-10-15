import { APIURL } from './index';
import localStrg from '../localStorage/localStrg';
import { PAGE } from '../pagination-js/main-pagination';


export async function fetchPopular(token) {
  let pageLang = localStorage.getItem('lang');
    if (pageLang === 'ua') {
      lang = `uk`;
    } else {
      lang = `en`;
    }
  return await (
    await fetch(APIURL + `3/trending/movie/day?api_key=${token}&language=${lang}&page=${PAGE}`)
  ).json();
}

export async function fetchGenresList(token, lang) {

    const response = await (await fetch(APIURL+`3/genre/movie/list?api_key=${token}&language=${lang}`)).json();
    localStrg.save("genresList",response.genres);
    console.log("Genres were updated, and saved to localStorage for future");
    return response.genres;
}

export async function fetchSearch(token, name, lang) {  
  let pageLang = localStorage.getItem('lang');
    if (pageLang === 'en') {
      lang = `en`;
    } else {
      lang = `uk`;
    }
    const response = await (await fetch(APIURL+`3/search/movie?api_key=${token}&language=e${lang}&query=${name}`)).json()
    return response
}
