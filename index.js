import {fetchMovie, fetchTvShowNetflix, fetchMoviesTrendings, fetchTopRated, fetchByGenreMovies, fetchtvShowNetflixForModal} from "./apiService.js";
import Header from "./components/Header.mjs";
import tvShowNetflix from './components/tvShowNetflix.mjs'
import trendingsMoviesRender from './components/trendingsMoviesRender.mjs'
import topratedRender from './components/topratedRender.mjs'
import actionMoviesRender from './components/actionMoviesRender.mjs'
import comedyMoviesRender from './components/comediesMoviesRender.mjs'
import documentariesMoviesRender from './components/documentariesMoviesRender.mjs'
import modalRender from './components/modalRender.mjs'

(async () => {
    let movie = await fetchMovie(157336);
    // console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

(async () => {
    document.querySelectorAll('#tvShowNetflix').forEach((film) => film.addEventListener('click', async (e) => {
    let id = parseInt(e.target.attributes[1].value)
    let tvShow = await fetchtvShowNetflixForModal(id);
    console.log(id)
    console.log(tvShow)
    if(id === tvShow.id){
      document.getElementById("container-modal").innerHTML = modalRender(tvShow);
      document.getElementById("container-modal").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${tvShow.backdrop_path})`;
      document.querySelector("#container-modal").style.backgroundSize = `cover`;
      document.querySelector("#container-modal").style.backgroundPosition = `center`;
      document.querySelector("#container-modal").style.height = `60vh`;
    } else {
      console.log('none')
    }
  }))
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
