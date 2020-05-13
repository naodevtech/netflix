import {fetchMovie, fetchTvShowNetflix, fetchMoviesTrendings, fetchTopRated, fetchByGenreMovies, fetchInfosModal} from "./apiService.js";
import Header from "./components/Header.mjs";
import tvShowNetflix from './components/tvShowNetflix.mjs'
import trendingsMoviesRender from './components/trendingsMoviesRender.mjs'
import topratedRender from './components/topratedRender.mjs'
import actionMoviesRender from './components/actionMoviesRender.mjs'
import comedyMoviesRender from './components/comediesMoviesRender.mjs'
import documentariesMoviesRender from './components/documentariesMoviesRender.mjs'
import modalRender from './components/modalRender.mjs'

const URL_MOVIES = 'https://api.themoviedb.org/3/movie/';
const URL_TVSHOW = 'https://api.themoviedb.org/3/tv/';

// Fetch and display DOM
(async () => {
    let movie = await fetchMovie(157336);
    // console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

(async () => {
  let series = await fetchTvShowNetflix();
  // console.log(series)
  for(let i = 0; i < series.length; i++){
    document.getElementById('tvShowNetflix').innerHTML += tvShowNetflix(series, i)
  }
})();

(async () => {
  let moviesTrendings = await fetchMoviesTrendings();
  // console.log(moviestrendings)
  for(let i = 0; i < moviesTrendings.length; i++){
    document.getElementById('trendingNow').innerHTML += trendingsMoviesRender(moviesTrendings, i)
  }
})();

(async () => {
  let moviesRated = await fetchTopRated();
  // console.log(moviesRated)
  for(let i = 0; i < moviesRated.length; i++){
    document.getElementById('ratedNow').innerHTML += topratedRender(moviesRated, i)
  }
})();

(async () => {
  let moviesByGenre = await fetchByGenreMovies(28);
  // console.log(moviesByGenre)
  for(let i = 0; i < moviesByGenre.length; i++){
    document.getElementById('actionMovies').innerHTML += actionMoviesRender(moviesByGenre, i)
  }
})();

(async () => {
  let moviesByGenre = await fetchByGenreMovies(35);
  // console.log(moviesByGenre)
  for(let i = 0; i < moviesByGenre.length; i++){
    document.getElementById('comediesMovies').innerHTML += comedyMoviesRender(moviesByGenre, i)
  }
})();

(async () => {
  let moviesByGenre = await fetchByGenreMovies(99);
  // console.log(moviesByGenre)
  for(let i = 0; i < moviesByGenre.length; i++){
    document.getElementById('documentariesMovies').innerHTML += documentariesMoviesRender(moviesByGenre, i)
  }
})();

// Modals

(async () => {
  document.querySelectorAll('#tvShowNetflix').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_TVSHOW, idTarget)
  // console.log(idTarget)
  // console.log(infosProgram)
  if(idTarget === infosProgram.id){
    document.getElementById("container-modal-netflix").innerHTML = modalRender(infosProgram);
    document.getElementById("container-modal-netflix").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
    document.querySelector("#container-modal-netflix").style.backgroundSize = `cover`;
    document.querySelector("#container-modal-netflix").style.backgroundPosition = `center`;
    document.querySelector("#container-modal-netflix").style.height = `60vh`;
  } else {
    console.error()
  }
}))
})();

(async () => {
document.querySelectorAll('#trendingNow').forEach((film) => film.addEventListener('click', async (e) => {
let idTarget = parseInt(e.target.attributes[1].value)
let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
// console.log(idTarget)
// console.log(infosProgram)
if(idTarget === infosProgram.id){
  document.getElementById("container-modal-trendings").innerHTML = modalRender(infosProgram);
  document.getElementById("container-modal-trendings").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
  document.querySelector("#container-modal-trendings").style.backgroundSize = `cover`;
  document.querySelector("#container-modal-trendings").style.backgroundPosition = `center`;
  document.querySelector("#container-modal-trendings").style.height = `60vh`;
} else {
  console.error()
}
}))
})();

(async () => {
document.querySelectorAll('#ratedNow').forEach((film) => film.addEventListener('click', async (e) => {
let idTarget = parseInt(e.target.attributes[1].value)
let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
// console.log(film)
// console.log(idTarget)
// console.log(infosProgram)
if(idTarget === infosProgram.id){
  document.getElementById("container-modal-ratedNow").innerHTML = modalRender(infosProgram);
  document.getElementById("container-modal-ratedNow").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
  document.querySelector("#container-modal-ratedNow").style.backgroundSize = `cover`;
  document.querySelector("#container-modal-ratedNow").style.backgroundPosition = `center`;
  document.querySelector("#container-modal-ratedNow").style.height = `60vh`;
} else {
  console.error()
}
}))
})();

(async () => {
  document.querySelectorAll('#actionMovies').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
  // console.log(film)
  // console.log(idTarget)
  // console.log(infosProgram)
  if(idTarget === infosProgram.id){
    document.getElementById("container-modal-actionMovies").innerHTML = modalRender(infosProgram);
    document.getElementById("container-modal-actionMovies").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
    document.querySelector("#container-modal-actionMovies").style.backgroundSize = `cover`;
    document.querySelector("#container-modal-actionMovies").style.backgroundPosition = `center`;
    document.querySelector("#container-modal-actionMovies").style.height = `60vh`;
  } else {
    console.error()
  }
}))
})();

(async () => {
  document.querySelectorAll('#comediesMovies').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
  // console.log(film)
  // console.log(idTarget)
  // console.log(infosProgram)
  if(idTarget === infosProgram.id){
    document.getElementById("container-modal-comediesMovies").innerHTML = modalRender(infosProgram);
    document.getElementById("container-modal-comediesMovies").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
    document.querySelector("#container-modal-comediesMovies").style.backgroundSize = `cover`;
    document.querySelector("#container-modal-comediesMovies").style.backgroundPosition = `center`;
    document.querySelector("#container-modal-comediesMovies").style.height = `60vh`;
  } else {
    console.error()
  }
}))
})();



(async () => {
  document.querySelectorAll('#documentariesMovies').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
   console.log(film)
   console.log(idTarget)
   console.log(infosProgram)
  if(idTarget === infosProgram.id){
    document.getElementById("container-modal-documentariesMovies").innerHTML = modalRender(infosProgram);
    document.getElementById("container-modal-documentariesMovies").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
    document.querySelector("#container-modal-documentariesMovies").style.backgroundSize = `cover`;
    document.querySelector("#container-modal-documentariesMovies").style.backgroundPosition = `center`;
    document.querySelector("#container-modal-documentariesMovies").style.height = `60vh`;
  } else {
    console.error()
  }
}))
})();