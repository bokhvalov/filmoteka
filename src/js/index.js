import { getPopularMovies } from "./getPopularMovies";

import localStrg from "./localStrg";
export const APIKEY = "565e4989d784811de7dff7d665000157";
export const APIURL="https://api.themoviedb.org/";
const refs = {
    mainContainer: document.querySelector(".filmoteka__container")
}

renderPopularMovies();
async function renderPopularMovies(){
    const currentPageContent = await getPopularMovies(APIKEY);
    localStrg.save("currentPage",currentPageContent);
    console.log(currentPageContent);
    
    const markup = currentPageContent.map (({id,title,year,genres,popularity,imgPath}) => {
        return `<div class="filmoteka__item" data-id="${id}">
        <a class="filmoteka__item-link" href="./">
            <div class="filmoteka__item-wrapper">
                <img class="filmoteka-img" src="${imgPath}" alt="" width="395px">
                <div class="overlay-text">
                    <h2 class="subtitle">${title}</h2>
                    <p class="discription">${genres} | ${year}</p>
                </div>
            </div>
        </a>
    </div>`
    })
    refs.mainContainer.insertAdjacentHTML("beforeend",markup.join(""))
}
