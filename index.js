import {fetchMovie, fetchTvShowNetflix, fetchMoviesTrendings, fetchTopRated, fetchByGenreMovies, fetchInfosModal, fetchSearching} from "./apiService.js";
import Header from "./components/Header.mjs";
import tvShowNetflix from './components/tvShowNetflix.mjs'
import trendingsMoviesRender from './components/trendingsMoviesRender.mjs'
import topratedRender from './components/topratedRender.mjs'
import actionMoviesRender from './components/actionMoviesRender.mjs'
import comedyMoviesRender from './components/comediesMoviesRender.mjs'
import documentariesMoviesRender from './components/documentariesMoviesRender.mjs'
import modalRender from './components/modalRender.mjs'
import searchRender from './components/searchRender.mjs'


const URL_MOVIES = 'https://api.themoviedb.org/3/movie/';
const URL_TVSHOW = 'https://api.themoviedb.org/3/tv/';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';


const debounce = (func, delay) => {
	let inDebounce
	return function() {
		const context = this
		const args = arguments
		clearTimeout(inDebounce)
		inDebounce = setTimeout(() => func.apply(context, args), delay)
	}
}

// Fetch and display DOM
(async () => {
    let movie = await fetchInfosModal(URL_MOVIES, 475557);
    // console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
	document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg)`;
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

(async () => {
	document.getElementById('inputSearch').addEventListener('input', debounce( async(e) => {
		if(e.target.value){
			console.log(e.target.value)
			let infosProgram = await fetchSearching(URL_SEARCH, e.target.value);
			console.log(infosProgram)
			let containerMovies = document.getElementsByClassName('movies')
			console.log(containerMovies[0])
			containerMovies[0].style.display = 'none'
			let header = document.getElementById('header').style.display = 'none'
			let containerSearch = document.getElementsByClassName('search-container')
			for(let i = 0; i < infosProgram.length; i++){
				containerSearch[0].innerHTML += searchRender(infosProgram, i)
			}
		} else if(e.target.value == false){
			console.log('vide')
		}
		window.document.addEventListener('click', (e) =>{
			let containerMovies = document.getElementsByClassName('movies')
			containerMovies[0].style.display = 'block'
			document.getElementById('header').style.display = 'block'
			let containerSearch = document.getElementsByClassName('search-container')
			containerSearch[0].innerHTML = ''
			// console.log(containerSearch[0].childNodes)
		})
	}, 1000))
  })();


// Modals
(async () => {
	let active = true;
	document.querySelectorAll('#tvShowNetflix').forEach((film) => film.addEventListener('click', async (e) => {
		let idTarget = parseInt(e.target.attributes[1].value)
		let infosProgram = await fetchInfosModal(URL_TVSHOW, idTarget)
		let netflixContainer = document.getElementById('container-modal-netflix')
		// console.log(idTarget)
		// console.log(infosProgram)
		if(idTarget === infosProgram.id){
			netflixContainer.innerHTML = modalRender(infosProgram);
			netflixContainer.style.display = 'block'
			netflixContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
			netflixContainer.style.backgroundSize = `cover`;
			netflixContainer.style.backgroundPosition = `center`;
			active = false
			if(active == false){
				let cross = netflixContainer.getElementsByClassName('cross')
				if(cross && cross[0]){
					cross[0].addEventListener('click', (e) =>{
						netflixContainer.style.display = 'none'
						active = true
					})
				}
			}	
		}else {
			console.error()
		}
	}))
})();

(async () => {
	let active = true;
	document.querySelectorAll('#trendingNow').forEach((film) => film.addEventListener('click', async (e) => {
		let idTarget = parseInt(e.target.attributes[1].value)
		let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
		let trendingsContainer = document.getElementById('container-modal-trendings')
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
						trendingsContainer.style.display = 'none'
						active = true
					})
				}
			}
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
		let actionMoviesContainer = document.getElementById('container-modal-actionMovies')
		if(idTarget === infosProgram.id){
			actionMoviesContainer.innerHTML = modalRender(infosProgram);
			actionMoviesContainer.style.display = 'block'
			actionMoviesContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
			actionMoviesContainer.style.backgroundSize = `cover`;
			actionMoviesContainer.style.backgroundPosition = `center`;
			active = false
			if(active == false){
				let cross = actionMoviesContainer.getElementsByClassName('cross')
				if(cross && cross[0]){
					cross[0].addEventListener('click', (e) =>{
						console.log('hello')
						actionMoviesContainer.style.display = 'none'
						active = true
					})
				}
			}	
		} else {
		console.error()
		}
	}))
})();

(async () => {
	let active = true;
	document.querySelectorAll('#comediesMovies').forEach((film) => film.addEventListener('click', async (e) => {
		let idTarget = parseInt(e.target.attributes[1].value)
		let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
		let comediesMoviesContainer = document.getElementById('container-modal-comediesMovies')
		if(idTarget === infosProgram.id){
			comediesMoviesContainer.innerHTML = modalRender(infosProgram);
			comediesMoviesContainer.style.display = 'block'
			comediesMoviesContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
			comediesMoviesContainer.style.backgroundSize = `cover`;
			comediesMoviesContainer.style.backgroundPosition = `center`;
			active = false
			if(active == false){
				let cross =comediesMoviesContainer.getElementsByClassName('cross')
				if(cross && cross[0]){
					cross[0].addEventListener('click', (e) =>{
						comediesMoviesContainer.style.display = 'none'
						active = true
					})
				}
			}
		}	 
		else {
			console.error()
		}
	}))
})();



(async () => {
	let active = true;
	document.querySelectorAll('#documentariesMovies').forEach((film) => film.addEventListener('click', async (e) => {
		let idTarget = parseInt(e.target.attributes[1].value)
		let infosProgram = await fetchInfosModal(URL_MOVIES, idTarget)
		let documentariesMoviesContainer = document.getElementById('container-modal-documentariesMovies')
		if(idTarget === infosProgram.id){
			documentariesMoviesContainer.innerHTML = modalRender(infosProgram);
			documentariesMoviesContainer.style.display = 'block'
			documentariesMoviesContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${infosProgram.backdrop_path})`;
			documentariesMoviesContainer.style.backgroundSize = `cover`;
			documentariesMoviesContainer.style.backgroundPosition = `center`;
			active = false
			if(active == false){
				let cross = documentariesMoviesContainer.getElementsByClassName('cross')
				if(cross && cross[0]){
					cross[0].addEventListener('click', (e) =>{
						documentariesMoviesContainer.style.display = 'none'
						active = true
					})
				}
			}	
		} 
		else {
		console.error()
		}
	}))
})();

// Input