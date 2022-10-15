import { openModalFooter } from '../common/modal-footer';
import { openModal } from '../common/modal';
import { libraryRender } from './libraryRender';
import goTopBtn from '../common/goTopBtn';
import Spinner from '../common/spinner';
// import { setLangLib } from '../changeLang/cahgeLangLib';
// import { langCurrent } from '../changeLang/changeLang';

const spin = new Spinner();
// const lang = langCurrent();
// setLangLib(lang);
spin.spinOn();

export const refs = {
  btnWatched: document.querySelector('#btnWatched-lang'),
  btnQueued: document.querySelector('#btnQueued-lang'),
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

goTopBtn();
spin.spinOff();