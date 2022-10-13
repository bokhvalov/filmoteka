import { pageCount } from '../index-page/search';

export function pagMarkup(peg2, peg3, peg4, peg5, peg6) {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button'>
   <
  </button>
</div>
<a class='pagination__page' id="preFirstPage" href=''>1</a>
<span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>
<a class='pagination__page' id="firstPage" href=''>${peg2}</a>
<a class='pagination__page' id ='thirdPage' href=''>${peg3}</a>
<a class='pagination__page' id ='fourthPage' href=''>${peg4}</a>
<a class='pagination__page' id ='fifthPage' href=''>${peg5}</a>
<a class='pagination__page' id="lastPag" href=''>${peg6}</a>
<span class='pagination__ellipsis' id="ellipsisEnd">...</span>
<a class='pagination__page' id="preLastPag" href=''>${pageCount}</a>
<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
    >
  </button>
</div>`;
}

export function markupLastPag(peg2, peg3, peg4, peg5, peg6) {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button'>
   <
  </button>
</div>
<a class='pagination__page' id="preFirstPage" href=''>1</a>
<span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>
<a class='pagination__page' id="firstPage" href=''>${peg2}</a>
<a class='pagination__page' id ='thirdPage' href=''>${peg3}</a>
<a class='pagination__page' id ='fourthPage' href=''>${peg4}</a>
<a class='pagination__page' id ='fifthPage' href=''>${peg5}</a>
<a class='pagination__page' id="lastPag" href=''>${peg6}</a>
<span class='pagination__ellipsis' id="ellipsisEnd">...</span>
<a class='pagination__page  pagination__page--activ' id="preLastPag" href=''>${pageCount}</a>
<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
    >
  </button>
</div>`;
}

export function markupStartPag() {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button' disabled>
  <
  </button>
</div>
<a class='pagination__page pagination__page--activ' id="preFirstPage" href=''>1</a>
<span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>
<a class='pagination__page' id="firstPage" href=''>2</a>
<a class='pagination__page' id="thirdPage" href=''>3</a>
<a class='pagination__page' id="fourthPage" href=''>4</a>
<a class='pagination__page' id="fifthPage" href=''>5</a>
<a class='pagination__page' id="lastPag" href=''>6</a>
<span class='pagination__ellipsis' id="ellipsisEnd">...</span>
<a class='pagination__page' id="preLastPag" href=''>${pageCount}</a>
<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
  >
  </button>

</div>`;
}
