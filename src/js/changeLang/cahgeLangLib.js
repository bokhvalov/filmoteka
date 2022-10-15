// import { text } from './packageLang';
// import { libraryRender } from './libraryRender';
// import { langCurrent } from './changeLang';

// const refs = {
//     enLangBTN: document.getElementById('e-lang-en'),
//     uaLangBTN: document.getElementById('e-lang-ua')
// }

// refs.enLangBTN.addEventListener('click', setLang.bind(null, 'en'));
// refs.uaLangBTN.addEventListener('click', setLang.bind(null, 'ua'));

// export function setLangLib(lang) {
//   let par;
//     if (!text.hasOwnProperty(lang))
//         return;
//   if (window.hasOwnProperty('localStorage'))
//       window.localStorage.setItem('lang', lang);
    
//     for (par in text[lang]) {
//         let elem = document.querySelector(par);
//         if (elem !== null) {
//             elem.textContent = text[lang][par]
//         }

//     if (lang === 'ua') {
//       document.querySelector('html').setAttribute('lang', 'ua')
     
//       refs.enLangBTN.style.cssText = `color: #fff;`
//       refs.uaLangBTN.style.cssText = `color: #ff6b01;
//   `;
//     } else {
//       document.querySelector('html').setAttribute('lang', 'en')
      
//       refs.uaLangBTN.style.cssText = `color: #fff;`
//       refs.enLangBTN.style.cssText = `color: #ff6b01;`
//     }
//     libraryRender();
//   }
// }