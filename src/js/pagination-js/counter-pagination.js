import { pageCount } from '../index-page/getPopularMovies';
import { PAGE } from './main-pagination';
import { pagMarkup } from './pagination-markup';

////////////////////////////// СЧЕТЧИК ПАГИНАЦИИ ////////////////////////////////////////////////////////////////////////////////////////
const div = document.querySelector('#pagination');
//////////////////////////// ОТРИСОВКА ПАГИНАЦИИ  ПО СЫЛКЕ
export function renderMarkupOnClickLink() {
  const firstPage = document.querySelector('#firstPage');
  const lastPage = document.querySelector('#lastPag');

  const pages = {
    peg2: PAGE,
    peg3: PAGE,
    peg4: PAGE,
    peg5: PAGE,
    peg6: PAGE,
  };

  // Последняя страница
  if (PAGE === pageCount || PAGE >= pageCount - 4) {
    lastPages(pages);
    return;
  }

  // Увиличение счетчика
  if (Number(lastPage.textContent) === PAGE) {
    // Останавливаю счетчик на пред последней странице
    if (Number(lastPage.textContent) === pageCount - 1) {
      return;
    }
    incriment(pages);
  }

  // Уменьшение счетчика
  if (Number(firstPage.textContent) === PAGE) {
    // Останавливаю счетчик на пред первой странице
    if (Number(firstPage.textContent) === 2) {
      return;
    }
    dicremrnt(pages);
  }

  // Отрисовка начальных страниц от 1-6
  if (PAGE === 1 || PAGE <= 5) {
    startPage();
  }

  // Последняя страница
  if (PAGE === pageCount || PAGE > pageCount - 2) {
    lastPages();
  }
}

//////////////////// ОТРИСОВКА ПАГИНАЦИИ  ПО КНОПКЕ

export function renderPaginationONClickBtn(e) {
  const firstPage = document.querySelector('#firstPage');
  const lastPage = document.querySelector('#lastPag');

  const pages = {
    peg2: PAGE,
    peg3: PAGE,
    peg4: PAGE,
    peg5: PAGE,
    peg6: PAGE,
  };

  // // Последняя страница
  if (PAGE === pageCount || PAGE >= pageCount - 5) {
    lastPages(pages);
    return;
  }

  // увиличеник счетчика
  if (PAGE > Number(lastPage.textContent)) {
    if (Number(lastPage.textContent) === pageCount - 1) {
      return;
    }
    incriment(pages);
  }

  // Отрисовка начальных страниц от 1-6
  if (PAGE === 5) {
    startPage();
    return;
  }

  // // Уменьшение счетчика
  if (PAGE < Number(firstPage.textContent)) {
    if (PAGE === 1) {
      return;
    }
    dicremrnt(pages);
  }
}

//////////////////////////////// ОТРИСОВКА ПОСЛЕДНЕЙ СТРАНИЦИ
function lastPages(pages) {
  if (PAGE > pageCount) {
    return;
  }
  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  div.innerHTML = '';

  peg6 = pageCount - 1;
  peg5 = pageCount - 2;
  peg4 = pageCount - 3;
  peg3 = pageCount - 4;
  peg2 = pageCount - 5;

  div.innerHTML = pagMarkup(peg2, peg3, peg4, peg5, peg6);
}

//////////////////////////////////// УМЕНЬШЕНИЕ СЧЕТЧИКА
function dicremrnt(pages) {
  div.innerHTML = '';

  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  peg5 -= 1;
  peg4 -= 2;
  peg3 -= 3;
  peg2 -= 4;

  div.innerHTML = pagMarkup(peg2, peg3, peg4, peg5, peg6);
}

////////////////////////////////// // УВИЛИЧЕНИЕ СЧЕТЧИКА

function incriment(pages) {
  if (PAGE > pageCount) {
    return;
  }
  div.innerHTML = '';

  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  peg3 += 1;
  peg4 += 2;
  peg5 += 3;
  peg6 += 4;

  div.innerHTML = pagMarkup(peg2, peg3, peg4, peg5, peg6);
}

// //////////////////// РАЗМЕТКА ПАГИНАЦИИ ПРИ ПЕРВОМ ЗАПУСКЕ СТРАНИЦЫ (НАЧАЛЬНАЯ СТРАНИЦА)

export function startPage(e) {
  div.innerHTML = '';

  div.innerHTML = `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button'>
 
  </button>
</div>
<a class='pagination__page ' href=''>1</a>
<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>
<a class='pagination__page' id="firstPage" href=''>2</a>
<a class='pagination__page' href=''>3</a>
<a class='pagination__page' href=''>4</a>
<a class='pagination__page' href=''>5</a>
<a class='pagination__page' id="lastPag" href=''>6</a>
<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>
<a class='pagination__lastPage' href=''>${pageCount}</a>
<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
    
  </button>
 
</div>`;
}

//////////////////////////// УБИРАЮ ИЛИ СТАВЛЮ  "..."

export function ellipsis() {
  const firstPage = document.querySelector('#firstPage');
  const lastPage = document.querySelector('#lastPag');
  const ellipsisStart = document.querySelector('#ellipsisStart');
  const ellipsisEnd = document.querySelector('#ellipsisEnd');

  if (firstPage.textContent > 2) {
    ellipsisStart.classList.remove('visually-hidden');
  }

  if (lastPage.textContent >= pageCount - 1) {
    ellipsisEnd.classList.add('visually-hidden');
    return;
  }
  ellipsisEnd.classList.remove('visually-hidden');
}
