import { fetchSearch } from './API' 
import { decodeGenres } from './decodeGenres';
import localStrg from "./localStrg";
const KEY = 'c77f748b921c87e18a4a8be3b6f2e99b';

let name = '';
const ref = {
    form: document.querySelector('.header_search'),
    mainContainer: document.querySelector(".filmoteka__container"),
    text: document.querySelector('.form-text')
}

ref.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {elements: { search }} = e.target;
    name = search.value; 
    renderPopularMovies()
    async function renderPopularMovies(){
    const currentPageContent = await getSearchMovies();
    
    if (currentPageContent.length === 0) {
        ref.text.classList.remove('visually-hidden');
        return
    }
      ref.text.classList.add('visually-hidden');
      
    localStrg.save("currentPage",currentPageContent);
    
    const markup = currentPageContent.map (({id,title,year,genres,popularity,imgPath}) => {
        return `<div class="filmoteka__item" data-id="${id}">
        <a class="filmoteka__item-link" href="./">
            <div class="filmoteka__item-wrapper">
                <img class="filmoteka-img" src="${imgPath}" alt="">
                <div class="overlay-text">
                    <h2 class="subtitle">${title}</h2>
                    <p class="discription">${genres}<span class="filmoteka__year"> ${year}</span> </p>
                    <div class="filmoteka__rating">${popularity}</div>
                </div>
            </div>
        </a>
    </div>`
    })
    ref.mainContainer.innerHTML = '';    
    ref.mainContainer.insertAdjacentHTML("beforeend",markup.join(""))
}
});

export async function getSearchMovies() {
  const popularMovies = await fetchSearch(KEY,name);
  const pageCount = popularMovies.total_pages;
  const result = popularMovies.results;
    
  const currentPage = await Promise.all(
    result.map(
      async ({
        id,
        title,
        original_title,
        name,
        original_name,
        overview,
        poster_path,
        genre_ids,
        popularity,
        release_date,
        first_air_date,
        vote_average,
        vote_count,
      }) => {
        const movieTitle = title ? title : name;
        const movieOriginalTitle = original_title
          ? original_title
          : original_name;
        const movieDate = release_date ? release_date : first_air_date;
        let imgPath = poster_path ? `https://image.tmdb.org/t/p/w300` + poster_path : '';
        const genres = genre_ids ? await decodeGenres(genre_ids) : null;
        const raitng = vote_average ? vote_average : null;

        return await {
          id: id,
          title: movieTitle,
          originalTitle: movieOriginalTitle,
          year: movieDate.slice(0, 4),
          genres: genres,
          popularity: popularity,
          overview: overview,
          rating: raitng,
          voteCount: vote_count,
          imgPath: imgPath,
        };
      }
    )
  );
  
  return currentPage;
}
