import { openModalFooter } from '../common/modal-footer';
import { openModal } from '../common/modal';
import { searchMovies } from './search';
import goTopBtn from '../common/goTopBtn';
import { renderPopularMovies } from './renderPopularMovies';
import btnWhiteBlack from '../common/btn-white-black';
import controlColor from '../common/controlColor';
import * as extendedSearch from "./extendedSearch";
import '../common/headers-fixed';
export const APIKEY = '565e4989d784811de7dff7d665000157';
export const APIURL = 'https://api.themoviedb.org/';


export const refs = {
  mainContainer: document.querySelector('.filmoteka__container'),
  openModalBtn: document.querySelector('.modal-footer-open'),
  searchResultText: document.querySelector('.form-text'),
  form: document.querySelector('.header_search')
};

refs.mainContainer.addEventListener('click', openModal);
refs.openModalBtn.addEventListener('click', openModalFooter);
refs.form.addEventListener('submit', searchMovies);


renderPopularMovies();
goTopBtn();
btnWhiteBlack();
controlColor();
