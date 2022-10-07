const APIURL="https://api.themoviedb.org/3/";


export function fetchPopular(token){
    return fetch(APIURL+`trending/all/day?api_key=${token}`)

}