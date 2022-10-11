import { pageCount } from '../index-page/getPopularMovies';

export function pagMarkup(peg2, peg3, peg4, peg5, peg6) {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button'>
   
  </button>
</div>
<a class='pagination__page ' href=''>1</a>
<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>
<a class='pagination__page' id="firstPage" href=''>${peg2}</a>
<a class='pagination__page' href=''>${peg3}</a>
<a class='pagination__page' href=''>${peg4}</a>
<a class='pagination__page' href=''>${peg5}</a>
<a class='pagination__page' id="lastPag" href=''>${peg6}</a>
<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>
<a class='pagination__lastPage' href=''>${pageCount}</a>
<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
    
  </button>
</div>`;
}
