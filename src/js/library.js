//import { getPopularMovies } from "./getPopularMovies";

import localStrg from "./localStrg";
import { libraryRender, libraryCleaner, libraryCleaner, getFilmById, addFilm, removeFilmById, isInLibrary } from "./libraryRender";
import { openModal } from './modal__library';


export const APIKEY = "565e4989d784811de7dff7d665000157";
export const APIURL="https://api.themoviedb.org/";
const refs = {
    mainContainer: document.querySelector(".filmoteka__container"),
    btnWatched: document.querySelector("#btnWatched"),
    btnQueued: document.querySelector("#btnQueued")
}

console.log(refs.btnQueued);
console.log(refs.btnWatched);

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

/* asigning events listiners to buttons: watched and queued */
refs.btnQueued.addEventListener('click',clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click',clickOnBtnWatchedHandler);

refs.mainContainer.addEventListener('click', openModal);

/* defining functions for event listiners*/

function clickOnBtnQueuedHandler() {
    refs.btnWatched.classList.remove("active-btn");
    refs.btnQueued.classList.add("active-btn");
    libraryCleaner(refs.mainContainer);
    libraryRender(refs.mainContainer,"queued");
}

function clickOnBtnWatchedHandler() {
    refs.btnQueued.classList.remove("active-btn");
    refs.btnWatched.classList.add("active-btn");
    libraryCleaner(refs.mainContainer);
    libraryRender(refs.mainContainer,"watched");
}

