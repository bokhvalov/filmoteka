import { APIURL } from "./index";
import localStrg from "./localStrg";

export async function fetchPopular(token){
    return await (await fetch(APIURL+`3/trending/movie/day?api_key=${token}`)).json();
}

export async function fetchGenresList(token){
    const response = await (await fetch(APIURL+`3/genre/movie/list?api_key=${token}&language=en-US`)).json();
    localStrg.save("genresList",response.genres);
    console.log("Genres were updated, and saved to localStorage for future");
    return response.genres;
}

export async function fetchSearch(token,name) {   
    const response = await (await fetch(APIURL+`3/search/movie?api_key=${token}&language=en-US&query=${name}`)).json()
    return response
}
