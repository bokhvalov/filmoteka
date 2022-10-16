import { text } from "./packageLang";

export function isQueued(btnQueue, filmId) {
    let pageLang = localStorage.getItem('lang');

    if (localStorage.getItem('queued_films').includes(filmId)) {
      if (pageLang === 'ua') {
       'Додано до черги';
        btnQueue.textContent = 'В черзі';
      }
      if (pageLang === 'en') {
        'Added to queued';
        btnQueue.textContent = 'Queued';
      }
      watchedBtn.disabled = true;
    } else {
      if (pageLang === 'ua') {
       'Видалено з черги';
        btnQueue.textContent = 'Додати до черги';
      }
      if (pageLang === 'en') {
        'Deleted from queue';
        btnQueue.textContent = 'Add to queue';
      }
      watchedBtn.disabled = false;
    }
  }


export function isWatched(btnWatched, filmId) {
  if (checkIfLoggedIn() === false) {
    return;
  } else {
    const btnQueue = document.querySelector('.js-queue');
    let pageLang = localStorage.getItem('lang');

    if (localStorage.getItem('watched_films').includes(filmId)) {
      if (pageLang === 'ua') {
       'Додано до переглянутих';
        btnWatched.textContent = 'Переглянуто';
      }
      if (pageLang === 'en') {
       'Added to watched';
        btnWatched.textContent = 'Added to watched';
      }
      btnQueue.disabled = true;
    } else {
      if (pageLang === 'ua') {
       'Видалено з переглянутих';
        btnWatched.textContent = 'Додати до переглянутих';
      }
      if (pageLang === 'en') {
        'Deleted from watched';
        btnWatched.textContent = 'Add to watched';
      }
      btnQueue.disabled = false;
    }
  }
}

export function makeDisableBtn(id) {
    const watchedLocalStorage = localStorage.getItem('watched_films');
    const queueLocalStorage = localStorage.getItem('queued_films');
    const btnWatched = document.querySelector('.js-watched');
    const btnQueue = document.querySelector('.js-queue');
    let pageLang = localStorage.getItem('lang');

    if (pageLang === 'ua') {
        if (watchedLocalStorage && watchedLocalStorage.includes(id)) {
            document.querySelector('.modal-btn-queue').disabled = true;
            btnWatched.textContent = 'Переглянуто';
        }
    }

    if (pageLang === 'en') {
        if (watchedLocalStorage && watchedLocalStorage.includes(id)) {
            document.querySelector('.modal-btn-queue').disabled = true;
            btnWatched.textContent = 'Added to watched';
        }
    }

    if (pageLang === 'ua') {
        if (queueLocalStorage && queueLocalStorage.includes(id)) {
            document.querySelector('.modal-btn-watched').disabled = true;
            btnQueue.textContent = 'В черзі';
        }
    }

    if (pageLang === 'en') {
        if (queueLocalStorage && queueLocalStorage.includes(id)) {
            document.querySelector('.modal-btn-watched').disabled = true;
            btnQueue.textContent = 'Queued';
        }
    }
}
