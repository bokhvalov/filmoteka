import { processCurrentPage } from '../data-processing/processCurrentPage';
import { openModalFooter } from '../common/modal-footer';
import { getPopularMovies } from '../index-page/search';
import { openModal } from '../common/modal';
import { startPage } from '../pagination-js/counter-pagination';
import { renderItems } from '../common/renderItems';
import { searchMovies } from './search';
import goTopBtn from '../common/goTopBtn';
import Spinner from '../common/spinner';
/* импорт для расширенного поиска */
import { getExtSearchMovies } from '../index-page/search';
import debounce from 'lodash.debounce';
import { fetchKeyWordsSearch } from './themoviedbAPI';
import Notiflix from 'notiflix';

/* переменные для расширенного поиска */
let genre = "none";
let year = 0;
let keyword = 0;


import btnWhiteBlack from '../common/btn-white-black';
import controlColor from '../common/controlColor';


const spin = new Spinner();

export const APIKEY = '565e4989d784811de7dff7d665000157';
export const APIURL = 'https://api.themoviedb.org/';
export const refs = {
  mainContainer: document.querySelector('.filmoteka__container'),
  openModalBtn: document.querySelector('.modal-footer-open'),
  searchResultText: document.querySelector('.form-text'),
  form: document.querySelector('.header_search'),
  /* элементы страницы для расширенного поиска */
  form: document.querySelector('.header_search'),
  filterGenre: document.querySelector('.js-filter-genres'),
  filterYear: document.querySelector('.js-filter-years'),
  filterReset: document.querySelector('.js-filter-reset'),
  filterForm: document.querySelector('.filter-search'),
  filterFormSubmitButton: document.querySelector('.js-filter-submit'),
  filterInput: document.querySelector('#keyword-input'),
  inputList: document.querySelector('#keywords-suggest')

};

refs.mainContainer.addEventListener('click', openModal);
refs.openModalBtn.addEventListener('click', openModalFooter);
refs.form.addEventListener('submit', searchMovies);

/* слушатели событий для расширенного поиска */
refs.filterGenre.addEventListener('change', onGenresFilterChangeHandler);
refs.filterYear.addEventListener('change', onYearsFilterChangeHandler);
refs.filterReset.addEventListener('click', onFilterResetClickHandler);
refs.filterForm.addEventListener('submit', onFormSubmitHandler);
refs.filterInput.addEventListener('input', debounce(onFormInputChangeHandler,700));



spin.spinOn();
renderPopularMovies();
setTimeout(startPage, 500);

export async function renderPopularMovies() {
  const popularMovies = await getPopularMovies(APIKEY);
  const currentPageContent = await processCurrentPage(popularMovies);

  renderItems(currentPageContent);
  spin.spinOff();

goTopBtn();
}


/* расширенный поиск */
export async function renderExtandedSearchMovies(genre,year,keyword) {
  //console.log("I'm in renderPopularMovies");
  const extandedSearchMovies = await getExtSearchMovies(APIKEY,genre,year,keyword);
  const currentPageContent= await processCurrentPage (extandedSearchMovies);

  renderItems(currentPageContent);
  spin.spinOff();

  goTopBtn();
}
function onGenresFilterChangeHandler (event) {
  genre = event.target.value;
  //renderExtandedSearchMovies(genre,year);
}

function onYearsFilterChangeHandler(event) {
  year = event.target.value;
  //renderExtandedSearchMovies(genre,year);
}

function onFilterResetClickHandler(event) {
  refs.filterForm.reset();
  genre = "none";
  year = 0;
  keyword = 0;
  refs.inputList.innerHTML='';
  renderPopularMovies();
}

function onFormSubmitHandler(event){
event.preventDefault();
//getKeyWordId();
renderExtandedSearchMovies(genre,year,keyword);
}

function onFormInputChangeHandler(event) {
  let wordSearch = event.target.value;
  if(!wordSearch||wordSearch===''){
    refs.filterFormSubmitButton.disabled = false;
    return;
  }
  fetchKeyWordsSearch(APIKEY,wordSearch)
  .then(response=>{return response.results})
  .then(response=>{renderKeyWords(refs.inputList, response)})
  .catch(error=>console.log(error));
  
}

function renderKeyWords (htmlElem, keyWords){

 let stringElement = '';
  htmlElem.innerHTML = '';
  if (!keyWords||keyWords.length==0) {
    Notiflix.Notify.failure('Sorry, it seems there is no such keyword. Please enter a valid key word');
    refs.filterFormSubmitButton.disabled = true;
  return ;
  }

  stringElement = keyWords.map(keyword=>{return `<option value="${keyword.name}" id="${keyword.id}">${keyword.name}</option>`});
  htmlElem.insertAdjacentHTML('beforeend', stringElement.join(''));
  getKeyWordId();
  //console.log(refs.filterInput.value);
 }

 function getKeyWordId() {
  
    const datalist = refs.filterInput;
    const inputChildren = refs.inputList.children;

    for(let i = 0; i < inputChildren.length; i++){
      //console.log('in get key word id: option '+ inputChildren[i].value+ ' input value  '+  datalist.value+'  equation' + (inputChildren[i].value === datalist.value));
        if (inputChildren[i].value === datalist.value.trim()) {
          refs.filterFormSubmitButton.disabled = false;
          keyword = inputChildren[i].id;
          return 
        }
    }
    Notiflix.Notify.failure('Please choose from word and phrases in list!');
    refs.filterFormSubmitButton.disabled = true;

 }


btnWhiteBlack();
controlColor();
