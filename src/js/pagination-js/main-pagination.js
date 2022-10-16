import { renderMarkupOnClickLink } from './counter-pagination';
import { renderPaginationONClickBtn } from './counter-pagination';
import { adaptivPage } from './counter-pagination';

import { renderPopularMoviesPagination } from './featch-pagination';
import { searchMoviesPagination } from './featch-pagination';

import { searchQueryPagination } from '../index-page/search';
import { pageCount } from '../index-page/search';

import { ellipsis } from './plagin-pagination';
import { curentPage } from './plagin-pagination';
import { disaibledBtn } from './plagin-pagination';
import Spinner from '../common/spinner';
import controlColor from '../common/controlColor';

import { onLaibreryLink } from './laibrery-pagination/laibrery-pag';
import { onLaibreryBtn } from './laibrery-pagination/laibrery-pag';

const spin = new Spinner();

export let PAGE = 1;

const refs = {
  form: document.querySelector('.header_search'),
  pagination: document.querySelector('#pagination'),
  paginationLib: document.querySelector('#pagination'),
};

refs.paginationLib.removeEventListener('click', onLaibreryLink);
refs.paginationLib.removeEventListener('click', onLaibreryBtn);

setListener(refs.pagination, 'click', onClickPaginationLink);
setListener(refs.pagination, 'click', onClickButtonPagination);
setListener(refs.form, 'submit', e => (PAGE = 1));

function setListener(element, tayp, handler) {
  if (element) {
    element.addEventListener(tayp, handler);
  }
}

// ////////////////////// НАВИГАЦИЯ ПО СЫЛКЕ

function onClickPaginationLink(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }
  PAGE = Number(e.target.textContent);

  if (searchQueryPagination === '') {
    spin.spinOn();
    renderPopularMoviesPagination();
  } else {
    spin.spinOn();
    searchMoviesPagination(e);
  }

  // СЧЕТЧИК ПАГИНАЦИИ

  if (pageCount > 1 && pageCount < 8) {
    adaptivPage();
  } else if (pageCount !== 1) {
    renderMarkupOnClickLink(e);
    ellipsis();
  }

  controlColor();
  curentPage();
  disaibledBtn();

  spin.spinOff();
}

// ////////////////////// НАВИГАЦИЯ ПО КНОПКЕ

function onClickButtonPagination(e) {
  e.preventDefault();
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

  if (searchQueryPagination === '') {
    spin.spinOn();
    renderPopularMoviesPagination();
  } else {
    spin.spinOn();
    searchMoviesPagination(e);
  }

  // СЧЕТЧИК ПАГИНАЦИИ

  if (pageCount > 1 && pageCount < 8) {
    adaptivPage();
  } else if (pageCount !== 1) {
    renderPaginationONClickBtn(e);
    ellipsis();
  }

  controlColor();
  curentPage();
  disaibledBtn();

  spin.spinOff();
}
