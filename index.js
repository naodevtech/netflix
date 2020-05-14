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
    let movie = await fetchInfosModal(URL_TVSHOW, 1399);
    // console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
	document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/2UrGpntyQtgunf039MErok78ZOK.jpg)`;
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
  let active = true;
  document.querySelectorAll('#tvShowNetflix').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_TVSHOW, idTarget)
  // console.log(idTarget)
  // console.log(infosProgram)
  if(idTarget === infosProgram.id){
	document.getElementById("container-modal-netflix").innerHTML = modalRender(infosProgram);
	document.getElementById("container-modal-netflix").style.display = 'block'
	document.getElementById("container-modal-netflix").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
	document.querySelector("#container-modal-netflix").style.backgroundSize = `cover`;
	document.querySelector("#container-modal-netflix").style.backgroundPosition = `center`;
	active = false
	if(active == false){
	document.getElementById('cross').addEventListener('click', (e) =>{
	console.log('hello')
	document.getElementById("container-modal-netflix").style.display = 'none'
	active = true
	})
	} 
  } else {
    console.error()
  }
}))
})();

(async () => {
	let active = true;
	document.querySelectorAll('#trendingNow').forEach((film) => film.addEventListener('click', async (e) => {
	// e.target.style.border = "3px solid white"
	let idTarget = parseInt(e.target.attributes[1].value)
	let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
	let trendingsContainer = document.getElementById('container-modal-trendings')
	// console.log(idTarget)
	// console.log(infosProgram)
	if(idTarget === infosProgram.id){
		trendingsContainer.innerHTML = modalRender(infosProgram);
		trendingsContainer.style.display = 'block'
		trendingsContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
		trendingsContainer.style.backgroundSize = `cover`;
		trendingsContainer.style.backgroundPosition = `center`;
		active = false
		if(active == false){
		let cross = trendingsContainer.getElementsByClassName('cross')
		if(cross && cross[0]){
			cross[0].addEventListener('click', (e) =>{
			console.log('hello')
			trendingsContainer.style.display = 'none'
			active = true
			})
		}
		document.getElementById('cross').addEventListener('click', (e) =>{
		console.log('hello')
		document.getElementById("container-modal-trendings").style.display = 'none'
		active = true
		})}
	} 
	else {
	console.error()
	}
	}))
})();

(async () => {
let active = true;
document.querySelectorAll('#ratedNow').forEach((film) => film.addEventListener('click', async (e) => {
	let idTarget = parseInt(e.target.attributes[1].value)
	let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
	let rateContainer = document.getElementById('container-modal-ratedNow')
	if(idTarget === infosProgram.id){
		rateContainer.innerHTML = modalRender(infosProgram);
		rateContainer.style.display = 'block'
		rateContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
		rateContainer.style.backgroundSize = `cover`;
		rateContainer.style.backgroundPosition = `center`;
		active = false
		if(active == false){
		let cross = rateContainer.getElementsByClassName('cross')
		if(cross && cross[0]){
			cross[0].addEventListener('click', (e) =>{
			console.log('hello')
			document.getElementById("container-modal-ratedNow").style.display = 'none'
			active = true
			})
		}}
		} else {
		console.error()
		}
		}))
})();

(async () => {
  let active = true;
  document.querySelectorAll('#actionMovies').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
  if(idTarget === infosProgram.id){
	document.getElementById("container-modal-actionMovies").innerHTML = modalRender(infosProgram);
	document.getElementById("container-modal-actionMovies").style.display = 'block'
	document.getElementById("container-modal-actionMovies").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
	document.querySelector("#container-modal-actionMovies").style.backgroundSize = `cover`;
	document.querySelector("#container-modal-actionMovies").style.backgroundPosition = `center`;
	active = false
	if(active == false){
	document.getElementById('cross').addEventListener('click', (e) =>{
	console.log('hello')
	document.getElementById("container-modal-actionMovies").style.display = 'none'
	active = true
	})}
	}  else {
    console.error()
  }
}))
})();

(async () => {
  let active = true;
  document.querySelectorAll('#comediesMovies').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
  // console.log(film)
  // console.log(idTarget)
  // console.log(infosProgram)
  if(idTarget === infosProgram.id){
	document.getElementById("container-modal-comediesMovies").innerHTML = modalRender(infosProgram);
	document.getElementById("container-modal-comediesMovies").style.display = 'block'
	document.getElementById("container-modal-comediesMovies").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
	document.querySelector("#container-modal-comediesMovies").style.backgroundSize = `cover`;
	document.querySelector("#container-modal-comediesMovies").style.backgroundPosition = `center`;
	active = false
	if(active == false){
	document.getElementById('cross').addEventListener('click', (e) =>{
	console.log('hello')
	document.getElementById("container-modal-comediesMovies").style.display = 'none'
	active = true
	})}
	} else {
    console.error()
  }
}))
})();



(async () => {
  let active = true;
  document.querySelectorAll('#documentariesMovies').forEach((film) => film.addEventListener('click', async (e) => {
  let idTarget = parseInt(e.target.attributes[1].value)
  let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
//    console.log(film)
//    console.log(idTarget)
//    console.log(infosProgram)
   if(idTarget === infosProgram.id){
	document.getElementById("container-modal-documentariesMovies").innerHTML = modalRender(infosProgram);
	document.getElementById("container-modal-documentariesMovies").style.display = 'block'
	document.getElementById("container-modal-documentariesMovies").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
	document.querySelector("#container-modal-documentariesMovies").style.backgroundSize = `cover`;
	document.querySelector("#container-modal-documentariesMovies").style.backgroundPosition = `center`;
	active = false
	if(active == false){
	document.getElementById('cross').addEventListener('click', (e) =>{
	console.log('hello')
	document.getElementById("container-modal-documentariesMovies").style.display = 'none'
	active = true
	})}
	} else {
    console.error()
  }
}))
})();

