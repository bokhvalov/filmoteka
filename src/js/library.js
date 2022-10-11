//import { getPopularMovies } from "./getPopularMovies";

import localStrg from "./localStrg";
import { libraryRender } from "./libraryRender";
import preLoader from "./preloader";
export const APIKEY = "565e4989d784811de7dff7d665000157";
export const APIURL="https://api.themoviedb.org/";
const refs = {
    mainContainer: document.querySelector(".filmoteka__container")
}
preLoader();
/* for testing purpouses getting film collection and save it as
it is library variable */



/* dummyLibraryMovies();

async function dummyLibraryMovies(){
    testQuery = await getPopularMovies(APIKEY);
    localStrg.save("watched",testQuery);
    localStrg.save("queued", testQuery);
} */

//console.log("I'm before library render")

/*reating gallery with films from "watched" library*/
libraryRender(refs.mainContainer,"watched");