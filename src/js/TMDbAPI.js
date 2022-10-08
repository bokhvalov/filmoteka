const APIURL="https://api.themoviedb.org/3/";


export async function fetchPopular(token){
    return await (await fetch(APIURL+`trending/all/day?api_key=${token}`)).json();
}

export async function fetchGenresList(token){
    return await (await fetch(APIURL+`genre/movie/list?api_key=${token}&language=en-US`)).json();
}