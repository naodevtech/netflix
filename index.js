import {fetchMovie, fetchTvShowNetflix, fetchMoviesTrendings, fetchTopRated, fetchActionMovies, fetchComedyMovies, fetchDocumentariesMovies} from "./apiService.js";
import Header from "./components/Header.mjs";
import tvShowNetflix from './components/tvShowNetflix.mjs'
import trendingsMoviesRender from './components/trendingsMoviesRender.mjs'
import topratedRender from './components/topratedRender.mjs'
import actionMoviesRender from './components/actionMoviesRender.mjs'
import comedyMoviesRender from './components/comediesMoviesRender.mjs'
import documentariesMoviesRender from './components/documentariesMoviesRender.mjs'

(async () => {
    let movie = await fetchMovie(157336);
    // console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

(async () => {
  let series = await fetchTvShowNetflix();
  // console.log(series)
  for(let i = 0; i < 20; i++){
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
  let moviesAction = await fetchActionMovies();
  // console.log(action)
  for(let i = 0; i < moviesAction.length; i++){
    document.getElementById('actionMovies').innerHTML += actionMoviesRender(moviesAction, i)
  }
})();

(async () => {
    let moviesComedies = await fetchComedyMovies();
    // console.log(comedy)
    for(let i = 0; i < moviesComedies.length; i++){
      document.getElementById('comedyMovies').innerHTML += comedyMoviesRender(moviesComedies, i)
    }
})();

(async () => {
  let documentaries = await fetchDocumentariesMovies();
  // console.log(documentaries)
  for(let i = 0; i < documentaries.length; i++){
    document.getElementById('documentariesMovies').innerHTML += documentariesMoviesRender(documentaries, i)
  }
})();