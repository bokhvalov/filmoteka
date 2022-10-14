import localStrg from '../localStorage/localStrg';
import { renderItems } from '../common/renderItems';

const libraryBackground = document.querySelector('.background-wrapper')

export function libraryRender(userLibrary) {
    const mainContainer = document.querySelector('.filmoteka__container');
    let currentLib = localStrg.load(userLibrary);
      if (!currentLib) {
        mainContainer.innerHTML =
          '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>'
        ;
        libraryBackground.classList.remove('no-display');
        return;
      }
      renderItems(currentLib);
      libraryBackground.classList.add('no-display');
    }