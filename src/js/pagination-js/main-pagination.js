import { renderMarkupOnClickLink } from './counter-pagination';
import { renderPaginationONClickBtn } from './counter-pagination';
import { renderPopularMovies } from '../index-page/index';

import { ellipsis } from './counter-pagination';

export let PAGE = 1;
const div = document.querySelector('#pagination');
const refs = {
  mainContainer: document.querySelector('.filmoteka__container'),
};
div.addEventListener('click', onClickPaginationLink);
div.addEventListener('click', onClickButtonPagination);

// startPage();
// ////////////////////// НАВИГАЦИЯ ПО СЫЛКЕ

function onClickPaginationLink(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'A') {
    return;
  }

  PAGE = Number(e.target.textContent);

  // fetchOnPagination(PAGE).then(respons => console.log(respons));
  refs.mainContainer.innerHTML = '';
  renderPopularMovies();

  // СЧЕТЧИК ПАГИНАЦИИ
  renderMarkupOnClickLink();
  ellipsis();
}

// ////////////////////// НАВИГАЦИЯ ПО КНОПКЕ

function onClickButtonPagination(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const leftBtn = document.querySelector('.btn-left');
  const rightBtn = document.querySelector('.btn-right');

  if (e.target === rightBtn) {
    PAGE += 1;
  }

  if (e.target === leftBtn) {
    PAGE -= 1;
  }

  // fetchOnPagination(PAGE).then(respons => console.log(respons));

  refs.mainContainer.innerHTML = '';
  renderPopularMovies();
  // СЧЕТЧИК ПАГИНАЦИИ
  renderPaginationONClickBtn(e);
  ellipsis();
}
