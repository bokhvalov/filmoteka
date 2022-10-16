import localStrg from '../localStorage/localStrg';
import { renderItems } from '../common/renderItems';
const libraryBackground = document.querySelector('.background-wrapper');
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

  if (!currentLib) {
    mainContainer.innerHTML =
      '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>';
    libraryBackground.classList.remove('no-display');
    return;
  }

  pageCount = getPageCount(currentLib);
  let arrayMove = counterRenderMove(currentLib, PAGE_LIBR);
  renderItems(arrayMove);
  localStrg.save('currentPage', arrayMove);
  libraryBackground.classList.add('no-display');
  refs.paginationLib.innerHTML = '';
  if (pageCount > 1 && pageCount < 8) {
    adaptivPageLib();
  } else if (pageCount !== 1) {
    startPageLib();
  }
}

function counterRenderMove(array, PAGE_LIBR) {
  const cards = 3;

  let refPoint;
  let сountdown;

  if (PAGE_LIBR === 1) {
    refPoint = 0;
    сountdown = cards;
  } else if (PAGE_LIBR === 2) {
    refPoint = cards;
    сountdown = cards * 2;
  } else {
    refPoint = cards * (PAGE_LIBR - 1);
    сountdown = cards * PAGE_LIBR;
  }

  let arr = [];

  if (array.length > cards) {
    for (let i = refPoint; i < сountdown; i += 1) {
      if (array[i] === undefined) {
        break;
      }
      arr.push(array[i]);
    }
  } else {
    arr = array;
  }

  return arr;
}

function getPageCount(arr) {
  return Math.ceil(arr.length / 3);
}
