import localStrg from '../localStorage/localStrg';
import { renderItems } from '../common/renderItems';


export function libraryRender(userLibrary) {
    const mainContainer = document.querySelector('.filmoteka__container');
  let currentLib = localStrg.load(userLibrary);
      if (!currentLib) {
        mainContainer.innerHTML =
          '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>'
        ;
        return;
      }
      renderItems(currentLib);
    }