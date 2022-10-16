import { text } from './packageLang';
import { renderPopularMovies } from '../index-page/renderPopularMovies';
import { filterRenderGenre, filterRenderYear } from '../index-page/filterRender';


const refs = {
    enLangBTN: document.getElementById('e-lang-en'),
    uaLangBTN: document.getElementById('e-lang-ua')
}

refs.enLangBTN.addEventListener('click', setLang.bind(null, 'en'));
refs.uaLangBTN.addEventListener('click', setLang.bind(null, 'ua'));

const inputPlaceholder = document.querySelector('.header_search-input')

const extInputPlaceholder = document.querySelector('.keyword-input');
const extInputLabel = document.querySelector('#keywords-label');
const extSearchBtnSbmt = document.querySelector('.js-filter-submit');
const extSearchBtnRst = document.querySelector('.js-filter-reset');



export function langCurrent() {
  if (localStorage.getItem('lang') === 'ua') {
    return 'ua'
  }
  return 'en'
}

export function setLang(lang) {
  let par;
    if (!text.hasOwnProperty(lang))
        return;
  if (window.hasOwnProperty('localStorage'))
      window.localStorage.setItem('lang', lang);
    
    for (par in text[lang]) {
        let elem = document.querySelector(par);
        if (elem !== null) {
            elem.textContent = text[lang][par]
        }

    if (lang === 'ua') {
      document.querySelector('html').setAttribute('lang', 'ua')
      inputPlaceholder.placeholder = 'Пошук Фільму'
      refs.enLangBTN.style.cssText = `color: #fff;`
      refs.uaLangBTN.style.cssText = `color: #ff6b01;`;

      extInputLabel.innerHTML = 'Ключове слово/фраза';
      extInputPlaceholder.placeholder = 'пошук...';
      extSearchBtnSbmt.innerHTML = 'шукати';
      extSearchBtnRst.innerHTML = 'скинути';
      filterRenderYear();
      filterRenderGenre();
      extSearchYears.innerHTML = 'Усі роки';
    
    } else {
      document.querySelector('html').setAttribute('lang', 'en')
      inputPlaceholder.placeholder = 'Movie search'
      refs.uaLangBTN.style.cssText = `color: #fff;`
      refs.enLangBTN.style.cssText = `color: #ff6b01;`

      extInputLabel.innerHTML = 'Keyword search:';
      extInputPlaceholder.placeholder = 'search...';
      extSearchBtnSbmt.innerHTML = 'search';
      extSearchBtnRst.innerHTML = 'reset';
      filterRenderYear();
      filterRenderGenre();
      extSearchYears.innerHTML = 'All years';

    }
    renderPopularMovies();
  }
}
