import { fetchGenresList } from "./API";
import localStrg, { save, load, del } from "./localStrg";
import { APIKEY } from "./index";

export async function decodeGenres(genres){
    if (!localStrg.load ("genresList")){
        await fetchGenresList(APIKEY)
    }
    const genresList = localStrg.load ("genresList");
    let genresNames = new Array;
    
    genres.forEach(genre => {
    // try to find genre in localStorage
    //try{
        genresNames.push((genresList.find(genreListItem => genreListItem.id === genre)).name)
    // }// update localStorage ganres data and try to find one more time
    // catch(error){
    //     console.log(`${genre} wasn't found in Local Storage, updating ganresList`)
    //     genresList = await fetchGenresList(APIKEY);
    //     genresNames.push((genresList.find(genreListItem => genreListItem.id === genre)).name)
    // }
});

    return(genresNames.join(", "))
}