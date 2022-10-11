import { renderItems } from '../common/renderItems';


// /*Clear all nested elements in html element*/
// function libraryCleaner(htmlElement){
//   htmlElement.innerHTML = '';
// }

/*boolean function to check if a film is in a library*/
// function isInLibrary(filmId, userLibrary) {
//   let result = false;
//   const filmCollectionFromLocalStorage = localStrg.load(userLibrary);

//   if (!filmCollectionFromLocalStorage) {
//     //console.log("checking variable existance");
//     return result;
//   }

//   filmCollectionFromLocalStorage.forEach((film)=>{
//     const {id}=film;
//     if (id===filmId) { result =true }});
//   return result;
// }

/*return object film from specified library, if there is no film with given id - 
function returns NULL*/

// function getFilmById(filmId, userLibrary) {
//   const filmLibrary = localStrg.load(userLibrary);
//   if (!filmLibrary) {
//      return null;}
//   return filmLibrary.find((film) => film.id === filmId);;
// }

/*function adds film object to specified library*/
// function addFilm(film, userLibrary) {
//   let filmLibrary = localStrg.load(userLibrary);
//   if (!filmLibrary) {
//     localStrg.save(userLibrary, [film]);
//   }
//   filmLibrary.push(film);
//   localStrg.save(userLibrary, filmLibrary);
// }

/*function removes film with specified id from specified library*/
// function removeFilmById(filmId, userLibrary){

//   if (isInLibrary(filmId, userLibrary)) {
//     let filmLibrary = localStrg.load(userLibrary);
//     filmLibrary = filmLibrary.filter((film) => film.id !== filmId);
//     localStrg.save(userLibrary, filmLibrary);
//   }
