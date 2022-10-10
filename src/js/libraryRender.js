//importing library for working with local storage
import localStrg from './localStrg';

/*function definition for gallery rendering
with two parameters: 1) document element where gallery has to be created
2) library (local storage variable) from which this gallery should be created*/

function libraryRender(htmlElement, userLibrary) {

  
  //console.log(htmlElement);
  
  
  /* getting films collection from localStorage */

  const filmCollectionFromLocalStorage = localStrg.load(userLibrary);
  
  //console.log("read from localstorage"+filmCollectionFromLocalStorage);
  
  /* Checking if there is collection variable in local storage */

  if (!filmCollectionFromLocalStorage) {

    /*if not: adding title with text "It seems that there is no films here!"*/

    htmlElement.insertAdjacentHTML(
      'beforeend',
      '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>'
    );
  }

  /* if collection exists, creating gallery */

  else {
    //console.log("local storage variable was read successfully!");
    let ObjectForInsert = filmCollectionFromLocalStorage.map(
      film => {
        //console.log("film: " + film);
        const {
          id,
          title,
          year,
          genres,
          rating,
          imgPath,
        } = film;

        let itemString = `<div class="filmoteka__item" data-id="${id}">
        <a class="filmoteka__item-link" href="./">
            <div class="filmoteka__item-wrapper">
                <img class="filmoteka-img" src="${imgPath}" alt="" width="">
                <div class="overlay-text">
                    <h2 class="subtitle">${title}</h2>
                    <p class="discription">`;
        if (!(genres === undefined)) {
          itemString += `<span class="description__genre">${genres}</span>`;
        }
        if (!(year === undefined)) {
          itemString += `<span class="description__year">${year}</span>`;
        }
        itemString += `<span class="rating">${rating}</span></p>
                </div>
            </div>
        </a>
        </div>`;
        return itemString;
      })
      .join('');
      
      //console.log( "this is object for insert: "+ObjectForInsert+ "In here");
      //console.log("I've done with string gathering");
      

    htmlElement.insertAdjacentHTML('beforeend', ObjectForInsert);
  }
}
/*Clear all nested elements in html element*/
function libraryCleaner(htmlElement){
  htmlElement.innerHTML = '';
}

/*boolean function to check if a film is in a library*/
function isInLibrary(filmId, userLibrary) {
  
  const filmCollectionFromLocalStorage = localStrg.load(userLibrary);

  if (!filmCollectionFromLocalStorage) {
    return false;
  }
  filmCollectionFromLocalStorage.forEach((film)=>{
    const {id}=film; if(id===filmId) {return true;}});
  return false;
}

/*return object film from specified library, if there is no film with given id - 
function returns NULL*/

function getFilmById(filmId, userLibrary) {
  const filmLibrary = localStrg.load(userLibrary);
  if (!filmLibrary) {
     return null;}
  return filmLibrary.find((film) => film.id === filmId);;
}

/*function adds film object to specified library*/
function addFilm(film, userLibrary) {
  let filmLibrary = localStrg.load(userLibrary);
  if (!filmLibrary) {
    localStrg.save(userLibrary, [film]);
  }
  filmLibrary.push(film);
  localStrg.save(userLibrary, filmLibrary);
}

/*function removes film with specified id from specified library*/
function removeFilmById(filmId, userLibrary){
  if (isInLibrary(filmId, userLibrary)) {
    let filmLibrary = localStrg.load(userLibrary);
    filmLibrary = filmLibrary.filter((film) => film.id !== filmId);
    localStrg.save(userLibrary.filmLibrary);
  }
}

export { libraryRender, libraryCleaner, getFilmById, addFilm, removeFilmById, isInLibrary};
