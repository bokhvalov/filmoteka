import localStrg from './localStrg';

const closeButton = document.querySelector('.cross');
const modalBackdrop = document.querySelector('.backdrop');
const modalBox = document.querySelector('.modal-container');


export function openModal(event) {
  if (!event.target.classList.contains('filmoteka__item')) {
    return;
  }
  const movieId = +event.target.dataset.id;
  renderModal(movieId);


  modalBackdrop.classList.remove('visually-hidden');
  document.body.style.overflow = 'scroll';

  closeButton.addEventListener('click', modalClosing);
  modalBackdrop.addEventListener('click', modalClosinByBackdrop);
  window.addEventListener('keydown', modalClosinByEsc);
}


function renderModal(movieID) {
  const currentPageContent = localStrg.load('currentPage');
  const movieToRender = currentPageContent.find(movie => (movie.id === movieID));

  const {
    title,
    originalTitle,
    year,
    genres,
    popularity,
    overview,
    rating,
    voteCount,
    imgPath}=movieToRender;

  const modalMarkup = `
  <div class="modal-img-container">
  <img
    class="modal-img"
    src="${imgPath}"
    alt="${title}"
    width="370"
    height="470"
  />
</div>
<div class="film-info">
  <h2 class="film-name">${title}</h2>
  <table class="modal-table">
    <tr class="modal-table__row">
      <td><p class="modal-table__attribute">Vote / Votes</p></td>
      <td>
        <p class="modal-table__value">
          <span class="modal-table__vote">${rating}</span> /
          <span class="modal-table__votes">${voteCount}</span>
        </p>
      </td>
    </tr>
    <tr class="modal-table__row">
      <td><p class="modal-table__attribute">Popularity</p></td>
      <td><p class="modal-table__value">${popularity}</p></td>
    </tr>
    <tr class="modal-table__row">
      <td><p class="modal-table__attribute">Original Title</p></td>
      <td><p class="modal-table__value">${originalTitle}</p></td>
    </tr>
    <tr class="modal-table__row">
      <td><p class="modal-table__attribute">Genre</p></td>
      <td><p class="modal-table__value">${genres}</p></td>
    </tr>
  </table>

  <h3 class="film-about">About</h3>
  <p class="film-description">
    ${overview}
  </p>
  <div class="modal-btn-wrap">
    <button type="button" class="modal-btn">ADD TO WATCHED</button>
    <button type="button" class="modal-btn add-to-queue" data-modal-queue>ADD TO QUEUE</button>
  </div>
</div>`
  modalBox.insertAdjacentHTML("beforeend",modalMarkup)
}

function modalClosing() {
  modalBackdrop.classList.add('visually-hidden');
  document.body.style.overflow = '';
  modalBackdrop.removeEventListener('click', modalClosinByBackdrop);
  closeButton.removeEventListener('click', modalClosing);
  window.removeEventListener('keydown', modalClosinByEsc);
  modalBox.innerHTML='<button type="button" class="cross">+</button>';
}

function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}

function modalClosinByBackdrop(event) {
  if (event.target.classList.contains('backdrop')) {
    modalClosing();
  }
}