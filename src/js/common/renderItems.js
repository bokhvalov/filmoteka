import { refs } from "../index-page";

export function renderItems(currentPageContent) {
    const itemMarkup = currentPageContent.map(
      ({ id, title, year, genres, rating, imgPath }) => {
        let countOfComma = (genres.match(/\,/g) || []).length;
        while (countOfComma > 1) {
          genres = genres.slice(0, genres.lastIndexOf(',')) + '...';
          countOfComma = (genres.match(/\,/g) || []).length;
        }
  
        return `<div class="filmoteka__item" data-id="${id}">
              <div class="filmoteka__item-wrapper">
                  <img class="filmoteka-img" src="${imgPath}" alt="">
                  <div class="overlay-text">
                      <h2 class="subtitle">${title}</h2>
                      <p class="discription">${genres} <span class="filmoteka__year"> ${year}</span> </p>
                      <div class="filmoteka__rating">${rating}</div>
                  </div>
              </div>
      </div>`;
      }
    );
    refs.mainContainer.innerHTML = '';
    refs.mainContainer.insertAdjacentHTML('beforeend', itemMarkup.join(''));
  }