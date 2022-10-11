import localStrg from './localStrg';
import "./search"
import { openModalFooter } from './modal-footer';
import { getPopularMovies } from './getPopularMovies';
import { openModal } from './modal';
import { startPage } from './pagination-js/counter-pagination';

export const APIKEY = '565e4989d784811de7dff7d665000157';
export const APIURL = 'https://api.themoviedb.org/';

const refs = {
  mainContainer: document.querySelector('.filmoteka__container'),
  openModalBtn: document.querySelector('.modal-footer-open')
};

renderPopularMovies();
refs.openModalBtn.addEventListener('click', openModalFooter);

export async function renderPopularMovies() {
  const currentPageContent = await getPopularMovies(APIKEY);
  localStrg.save('currentPage', currentPageContent);
  console.log(currentPageContent);

  const markup = currentPageContent.map(
    ({ id, title, year, genres, rating, imgPath }) => {
      let countOfComma = (genres.match(/\,/g) || []).length;
      while (countOfComma>1) {
        genres = genres.slice(0, genres.lastIndexOf(","))+"...";
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
  refs.mainContainer.insertAdjacentHTML('beforeend', markup.join(''));
  refs.mainContainer.addEventListener('click', openModal);
  startPage();
}
