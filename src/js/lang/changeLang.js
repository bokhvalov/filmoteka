import { text } from './packageLang';
import { refs } from '../index-page';

const inputPlaceholder = document.querySelector('.header_search-input');
const extInputPlaceholder = document.querySelector('.keyword-input');
const extInputLabel = document.querySelector('#keywords-label');
const extSearchYears = document.querySelector('.js-filter-years--default');
const extSearchGenres = document.querySelector('.js-filter-genres--default');
const extSearchBtnSbmt = document.querySelector('.js-filter-submit');
const extSearchBtnRst = document.querySelector('.js-filter-reset');

export function langCurrent() {
  if (localStorage.getItem('lang') === 'ua') {
    return 'ua';
  }
  return 'en';
}

export function setIndexLang(lang) {
  let par;
  if (!text.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);

  for (par in text[lang]) {
    let elem = document.querySelector(par);
    if (elem !== null) {
      elem.textContent = text[lang][par];
    }

    if (lang === 'ua') {
      document.querySelector('html').setAttribute('lang', 'ua');
      inputPlaceholder.placeholder = 'Пошук Фільму';
      refs.enLangBTN.style.cssText = `color: #fff;`;
      refs.uaLangBTN.style.cssText = `color: #ff6b01;`;

      extInputLabel.innerHTML = 'Ключове слово/фраза';
      extInputPlaceholder.placeholder = 'пошук...';
      extSearchBtnSbmt.innerHTML = 'шукати';
      extSearchBtnRst.innerHTML = 'скинути';
      extSearchGenres.innerHTML = 'Усі жанри';
      extSearchYears.innerHTML = 'Усі роки';
    } else {
      document.querySelector('html').setAttribute('lang', 'en');
      inputPlaceholder.placeholder = 'Movie search';
      refs.uaLangBTN.style.cssText = `color: #fff;`;
      refs.enLangBTN.style.cssText = `color: #ff6b01;`;

      extInputLabel.innerHTML = 'Keyword search:';
      extInputPlaceholder.placeholder = 'search...';
      extSearchBtnSbmt.innerHTML = 'search';
      extSearchBtnRst.innerHTML = 'reset';
      extSearchGenres.innerHTML = 'All Genres';
      extSearchYears.innerHTML = 'All years';
    }
  }
}

export function setLibraryLang(lang) {
  let par;
  if (!text.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);

  for (par in text[lang]) {
    let elem = document.querySelector(par);
    if (elem !== null) {
      elem.textContent = text[lang][par];
    }

    if (lang === 'ua') {
      document.querySelector('html').setAttribute('lang', 'ua');
      inputPlaceholder.placeholder = 'Пошук Фільму';
      refs.enLangBTN.style.cssText = `color: #fff;`;
      refs.uaLangBTN.style.cssText = `color: #ff6b01;`;

      extInputLabel.innerHTML = 'Ключове слово/фраза';
      extInputPlaceholder.placeholder = 'пошук...';
      extSearchBtnSbmt.innerHTML = 'шукати';
      extSearchBtnRst.innerHTML = 'скинути';
      extSearchGenres.innerHTML = 'Усі жанри';
      extSearchYears.innerHTML = 'Усі роки';
    } else {
      document.querySelector('html').setAttribute('lang', 'en');
      inputPlaceholder.placeholder = 'Movie search';
      refs.uaLangBTN.style.cssText = `color: #fff;`;
      refs.enLangBTN.style.cssText = `color: #ff6b01;`;

      extInputLabel.innerHTML = 'Keyword search:';
      extInputPlaceholder.placeholder = 'search...';
      extSearchBtnSbmt.innerHTML = 'search';
      extSearchBtnRst.innerHTML = 'reset';
      extSearchGenres.innerHTML = 'All Genres';
      extSearchYears.innerHTML = 'All years';
    }
    renderPopularMovies();
  }
}
