import { renderMarkupOnClickLink } from './counter-pagination';
import { renderPaginationONClickBtn } from './counter-pagination';

import { renderPopularMovies } from '../index-page/index';
import { searchMoviesPagination } from './featch-pagination';

import { searchQueryPagination } from '../index-page/search';

import { ellipsis } from './plagin-pagination';
import { curentPage } from './plagin-pagination';
import { disaibledBtn } from './plagin-pagination';
import Spinner from '../common/spinner';
import controlColor from '../common/controlColor';


const spin = new Spinner();

export let PAGE = 1;

const refs = {
  pagination: document.querySelector('#pagination'),
  mainContainer: document.querySelector('.filmoteka__container'),
};
refs.pagination.addEventListener('click', onClickPaginationLink);
refs.pagination.addEventListener('click', onClickButtonPagination);

// ////////////////////// НАВИГАЦИЯ ПО СЫЛКЕ

function onClickPaginationLink(e) {
  e.preventDefault();
  spin.spinOn();
  if (e.target.nodeName !== 'A') {
    return;
  }
  PAGE = Number(e.target.textContent);

  refs.mainContainer.innerHTML = '';

  console.log(searchQueryPagination === '');

  if (searchQueryPagination === '') {
    renderPopularMovies();
  } else {
    searchMoviesPagination(e);
  }

  // СЧЕТЧИК ПАГИНАЦИИ
  controlColor();
  renderMarkupOnClickLink(e);
  ellipsis();
  curentPage();
  disaibledBtn();

  spin.spinOff();
}

// ////////////////////// НАВИГАЦИЯ ПО КНОПКЕ

function onClickButtonPagination(e) {
  e.preventDefault();
  spin.spinOn();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const ref = {
    leftBtn: document.querySelector('.btn-left'),
    rightBtn: document.querySelector('.btn-right'),
  };

  if (e.target === ref.rightBtn) {
    PAGE += 1;
  }

  if (e.target === ref.leftBtn) {
    PAGE -= 1;
  }

  refs.mainContainer.innerHTML = '';

  if (searchQueryPagination === '') {
    renderPopularMovies();
  } else {
    searchMoviesPagination(e);
  }

  // СЧЕТЧИК ПАГИНАЦИИ
  controlColor();
  renderPaginationONClickBtn(e);
  ellipsis();
  curentPage();
  disaibledBtn();

  spin.spinOff();
}
