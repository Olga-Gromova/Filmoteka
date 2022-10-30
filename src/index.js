import { refs } from './js/refs';
import Movies from './js/Movies';
import renderMarkupByKeywordMoviesList from './js/render-markup-by-keyword';
import genresOfMovies from './data/genresOfMovies.json';
import modal from './js/open-modal';
import makeFilmModalMarkup from './js/modal-film';
import './js/pagination';
import './js/button-up';


// Для тестирования модалки -> раскомментировать код ниже -> снять класс is-hidden с backdrop в паршеле modal-film.html

// refs.modalEl.insertAdjacentHTML(
//   'beforeend',
//   makeFilmModalMarkup(
//     '',
//     'Black Adam',
//     7.077,
//     602,
//     3835.264,
//     [28, 878, 14],
//     'Nearly 5,000 years after he was bestowed with the almighty powers Nearly 5,000 years after he was bestowed with the almighty powers Nearly 5,000 years after he was bestowed with the almighty powers Nearly 5,000 years after he was bestowed with the almighty powers Nearly 5,000 years after he was bestowed with the almighty powers Nearly 5,000 years after he was bestowed with the ',
//     ''
//   )
// );



