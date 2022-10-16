import { text } from './packageLang';
import { renderPopularMovies } from '../index-page';


const refs = {
    enLangBTN: document.getElementById('e-lang-en'),
    uaLangBTN: document.getElementById('e-lang-ua')
}

refs.enLangBTN.addEventListener('click', setLang.bind(null, 'en'));
refs.uaLangBTN.addEventListener('click', setLang.bind(null, 'ua'));

const inputPlaceholder = document.querySelector('.header_search-input')

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
      refs.uaLangBTN.style.cssText = `color: #ff6b01;
  `;
    } else {
      document.querySelector('html').setAttribute('lang', 'en')
      inputPlaceholder.placeholder = 'Movie search'
      refs.uaLangBTN.style.cssText = `color: #fff;`
      refs.enLangBTN.style.cssText = `color: #ff6b01;`
    }
    renderPopularMovies();
  }
}
