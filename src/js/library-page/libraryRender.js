import localStrg from '../localStorage/localStrg';
import { renderItems } from '../common/renderItems';

const libraryBackground = document.querySelector('.background-wrapper');

// export function libraryRender(userLibrary) {
//     const mainContainer = document.querySelector('.filmoteka__container');
//     let currentLib = localStrg.load(userLibrary);
//       if (!currentLib) {
//         mainContainer.innerHTML =
//           '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>'
//         ;
//         libraryBackground.classList.remove('no-display');
//         return;
//       }
//       renderItems(currentLib);
//       libraryBackground.classList.add('no-display');
//     }

import { startPageLib } from '../pagination-js/laibrery-pagination/laibrery-counter';
import { adaptivPageLib } from '../pagination-js/laibrery-pagination/laibrery-counter';
import { PAGE_LIBR } from '../pagination-js/laibrery-pagination/laibrery-pag';

const refs = {
  paginationLib: document.querySelector('#pagination'),
};
export let pageCount;

export function libraryRender(userLibrary) {
  const mainContainer = document.querySelector('.filmoteka__container');
  let currentLib = localStrg.load(userLibrary);

  pageCount = getPageCount(currentLib);
  let arreyMove = counterRenderMove(currentLib, PAGE_LIBR);

  if (!currentLib) {
    mainContainer.innerHTML =
      '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>';
    libraryBackground.classList.remove('no-display');
    return;
  }
  renderItems(arreyMove);
  libraryBackground.classList.add('no-display');

  refs.paginationLib.innerHTML = '';
  if (pageCount > 1 && pageCount < 8) {
    adaptivPageLib();
  } else if (pageCount !== 1) {
    startPageLib();
  }
}

function counterRenderMove(arrey, PAGE_LIBR) {
  let refPoint;
  let сountdown;

  if (PAGE_LIBR === 1) {
    refPoint = 0;
    сountdown = 20;
  } else if (PAGE_LIBR === 2) {
    refPoint = 20;
    сountdown = 20 * 2;
  } else {
    refPoint = 20 * (PAGE_LIBR - 1);
    сountdown = 20 * PAGE_LIBR;
  }

  let arr = [];

  if (arrey.length > 20) {
    for (let i = refPoint; i < сountdown; i += 1) {
      if (arrey[i] === undefined) {
        break;
      }
      arr.push(arrey[i]);
    }
  } else {
    arr = arrey;
  }

  return arr;
}

function getPageCount(arr) {
  return Math.ceil(arr.length / 20);
}
