import { renderMarkupOnLibClickLink } from './laibrery-counter';
import { renderPagONLibClickBtn } from './laibrery-counter';
import { adaptivPageLib } from './laibrery-counter';

import { libraryRender } from '../../library-page/libraryRender';
import { loadLaibrery } from '../../localStorage/localStrg';

import { pageCount } from '../../library-page/libraryRender';

import { ellipsisLib } from './laibrery-plagin';
import { curentPageLib } from './laibrery-plagin';
import { disaibledBtnLib } from './laibrery-plagin';

const refs = {
  paginationLib: document.querySelector('#pagination'),
};

setListenerLib(refs.paginationLib, 'click', onLaibreryLink);
setListenerLib(refs.paginationLib, 'click', onLaibreryBtn);
function setListenerLib(element, tayp, handler) {
  if (element) {
    element.addEventListener(tayp, handler);
  }
}

export let PAGE_LIBR = 1;

export function onLaibreryLink(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }

  PAGE_LIBR = Number(e.target.textContent);

  if (loadLaibrery === 'watched') {
    libraryRender('watched');
  } else if (loadLaibrery === 'queued') {
    libraryRender('queued');
  }

  // СЧЕТЧИК
  if (pageCount > 1 && pageCount < 8) {
    adaptivPageLib();
  } else if (pageCount !== 1) {
    renderMarkupOnLibClickLink();
    ellipsisLib();
  }
  curentPageLib();
  disaibledBtnLib();
}

export function onLaibreryBtn(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const ref = {
    leftBtn: document.querySelector('.btn-left'),
    rightBtn: document.querySelector('.btn-right'),
  };
  if (e.target === ref.rightBtn) {
    PAGE_LIBR += 1;
  }
  if (e.target === ref.leftBtn) {
    PAGE_LIBR -= 1;
  }

  if (loadLaibrery === 'watched') {
    libraryRender('watched');
  } else if (loadLaibrery === 'queued') {
    libraryRender('queued');
  }

  // СЧЕТЧИК
  if (pageCount > 1 && pageCount < 8) {
    adaptivPageLib();
  } else if (pageCount !== 1) {
    renderPagONLibClickBtn();
    ellipsisLib();
  }
  curentPageLib();
  disaibledBtnLib();
}
