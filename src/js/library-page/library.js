import { renderItems } from '../common/renderItems';
import { openModalFooter } from '../common/modal-footer';
import { openModal } from '../common/modal';
import localStrg from '../common/localStrg';

const refs = {
  btnWatched: document.querySelector('#btnWatched'),
  btnQueued: document.querySelector('#btnQueued'),
  mainContainer: document.querySelector('.filmoteka__container'),
  openModalBtn: document.querySelector('.modal-footer-open'),
  mainContainer: document.querySelector('.filmoteka__container'),
};


libraryRender("watched");

/* asigning events listiners to buttons: watched and queued */
refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);
refs.mainContainer.addEventListener('click', openModal);
refs.openModalBtn.addEventListener('click', openModalFooter);

/* defining functions for event listiners*/
function libraryRender(userLibrary) {
let currentLib = localStrg.load(userLibrary);
  if (!currentLib) {
    refs.mainContainer.innerHTML =
      '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>'
    ;
    return;
  }
  renderItems(currentLib);
  localStrg.save('currentPage', currentLib);
}

function clickOnBtnQueuedHandler() {
  refs.btnWatched.classList.remove('active-btn');
  refs.btnQueued.classList.add('active-btn');
  libraryRender("queued");
}

function clickOnBtnWatchedHandler() {
  refs.btnQueued.classList.remove('active-btn');
  refs.btnWatched.classList.add('active-btn');
  libraryRender("watched");
}

export function onClickWatchBtn(movieID) {
  const watchBtn = document.querySelector('.modal-btn');

  if (!watchBtn.classList.contains('watched')) {
    addMovieToLib(movieID, 'watched');
    watchBtn.classList.add('watched');
    watchBtn.text.innerText = 'WATCHED';
    return;
  }

  watchBtn.classList.remove('watched');
  watchBtn.text.innerText = 'ADD TO WATCHED';
  removeMovieFromLib(movieID, 'watched');

  if (window.location.href.indexOf('library') > -1) {
    renderItems('watched');
  }
}

export function onClickQueueBtn(movieID) {
  const watchBtn = document.querySelector('.modal-btn');

  if (!watchBtn.classList.contains('queued')) {
    addMovieToLib(movieID, 'queued');
    watchBtn.classList.add('queued');
    watchBtn.text.innerText = 'QUEUED';
    return;
  }

  watchBtn.classList.remove('queued');
  watchBtn.text.innerText = 'ADD TO QUEUE';
  removeMovieFromLib(movieID, 'queued');

  if (window.location.href.indexOf('library') > -1) {
    renderItems('queued');
  }
}

export function removeMovieFromLib(movieID, userLibrary) {
  const currentLibraryState = localStrg.load(userLibrary);
  const updatedLibraryState = currentLibraryState.filter(movie => {
    return movie.id !== movieID;
  });
  localStrg.save(userLibrary, updatedLibraryState);
}

export function addMovieToLib(movieID, userLibrary) {
  const currentLibraryState = localStrg.load(userLibrary);
  const movieToAddToLib = localStrg
    .load('currentPage')
    .filter(movie => (movie.id = movieID));
  const updatedLibraryState = currentLibraryState.push(movieToAddToLib);

  localStrg.save(userLibrary, updatedLibraryState);
}
