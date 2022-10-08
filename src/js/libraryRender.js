//importing library for working with local storage
import { load, save, del } from './localStrg';
f;

/*function definition for gallery rendering
with two parameters: 1) document element where gallery has to be created
2) library (local storage variable) from which this gallery should be created*/
function libraryRender(htmlElement, userLibrary) {

//getting films collection from localStorage
  const filmCollectionFromLocalStorage = load(userLibrary);

//Checking if there is collection variable in local storage
  if (!filmCollectionFromLocalStorage) 
  
//if not: adding title with text "It seems that there is no films here!"
  {
    htmlElement.insertAdjacentHTML(
      'beforeend',
      '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>'
    );
  } else 
  //if collection exists, creating gallery
  {
    const ObjectForInsert = filmCollectionFromLocalStorage
      .map(film => {
        const {
          title,
          originalTitle,
          year,
          genres,
          /* popularity, 
                overview, */
          rating,
          /* voteCount, */
          imgPath,
        } = film;
        if (genres === undefined) {
          return `<div class="filmoteka__item">
            <a class="filmoteka__item-link" href="./">
                <div class="filmoteka__item-wrapper">
                    <img class="filmoteka-img" src="${imgPath}" alt="" width="">
                    <div class="overlay-text">
                        <h2 class="subtitle">${originalTitle}</h2>
                        <p class="discription">${genres} | ${year} <span class="rating">${rating}</span></p>
                    </div>
                </div>
            </a>
        </div>`;
        } else {
          return `<div class="filmoteka__item">
            <a class="filmoteka__item-link" href="./">
                <div class="filmoteka__item-wrapper">
                    <img class="filmoteka-img" src="${imgPath}" alt="" width="">
                    <div class="overlay-text">
                        <h2 class="subtitle">${originalTitle}</h2>
                        <p class="discription">${year} <span class="rating">${rating}</span></p>
                    </div>
                </div>
            </a>
        </div>`;
        }
      })
      .join('');

    htmlElement.insertAdjacentHTML('beforeend', ObjectForInsert);
  }
}
export { libraryRender };