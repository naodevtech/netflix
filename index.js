import {fetchMovie, fetchTvShowNetflix, fetchMoviesTrendings, fetchTopRated, fetchActionMovies, fetchComedyMovies, fetchDocumentaryMovies} from "./apiService.js";
import Header from "./components/Header.mjs";
import tvShowNetflix from './components/tvShowNetflix.mjs'
import trendingsMoviesRender from './components/trendingsMoviesRender.mjs'
import topratedRender from './components/topratedRender.mjs'
import actionMoviesRender from './components/actionMoviesRender.mjs'
import comedyMoviesRender from './components/comedyMoviesRender.mjs'
import documentaryMoviesRender from './components/documentaryMoviesRender.mjs'

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
  let trendings = await fetchMoviesTrendings();
  // console.log(trendings)
  for(let i = 0; i < trendings.length; i++){
    document.getElementById('trendingNow').innerHTML += trendingsMoviesRender(trendings, i)
  }
})();

(async () => {
  let rated = await fetchTopRated();
  // console.log(rated)
  for(let i = 0; i < rated.length; i++){
    document.getElementById('ratedNow').innerHTML += topratedRender(rated, i)
  }
})();

(async () => {
  let action = await fetchActionMovies();
  console.log(action)
  for(let i = 0; i < action.length; i++){
    document.getElementById('actionMovies').innerHTML += actionMoviesRender(action, i)
  }
})();

(async () => {
    let comedy = await fetchComedyMovies();
    console.log(comedy)
    for(let i = 0; i < comedy.length; i++){
      document.getElementById('comedyMovies').innerHTML += comedyMoviesRender(comedy, i)
    }
  })();

  (async () => {
    let docu = await fetchDocumentaryMovies();
    console.log(docu)
    for(let i = 0; i < docu.length; i++){
      document.getElementById('documentaryMovies').innerHTML += documentaryMoviesRender(docu, i)
    }
  })();