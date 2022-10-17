import { renderMarkupOnLibClickLink } from './library-counter';
import { renderPagONLibClickBtn } from './library-counter';
import { adaptivPageLib } from './library-counter';

import { libraryRender } from '../../library-page/libraryRender';
import { loadlibrary } from '../../localStorage/localStrg';

import { pageCount } from '../../library-page/libraryRender';

import { ellipsisLib } from './library-plugin';
import { curentPageLib } from './library-plugin';
import { disaibledBtnLib } from './library-plugin';

// import { onClickPaginationLink } from '../main-pagination';
// import { onClickButtonPagination } from '../main-pagination';

const refs = {
  paginationLib: document.querySelector('#pagination'),
  // pagination: document.querySelector('#pagination'),
  // form: document.querySelector('.header_search'),
};

// removeListenerLib(refs.pagination, 'click', onClickPaginationLink);
// removeListenerLib(refs.pagination, 'click', onClickButtonPagination);
// removeListenerLib(refs.form, 'submit', e => (PAGE = 1));

setListenerLib(refs.paginationLib, 'click', onlibraryLink);
setListenerLib(refs.paginationLib, 'click', onlibraryBtn);
function setListenerLib(element, tayp, handler) {
  if (element) {
    element.addEventListener(tayp, handler);
  }
}

// function removeListenerLib(element, tayp, handler) {
//   if (element) {
//     element.removeEventListener(tayp, handler);
//   }
// }

export let PAGE_LIBR = 1;

export function onlibraryLink(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }

  console.log('Это библиотека');
  PAGE_LIBR = Number(e.target.textContent);

  if (loadlibrary === 'watched') {
    libraryRender('watched');
  } else if (loadlibrary === 'queued') {
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

export function onlibraryBtn(e) {
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

  if (loadlibrary === 'watched') {
    libraryRender('watched');
  } else if (loadlibrary === 'queued') {
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
