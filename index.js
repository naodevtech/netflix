import fetchMovie from "./apiservices/movie.mjs"
import fetchTvShowNetflix from './apiservices/tvShowNetflix.mjs'
import Header from "./components/Header.mjs"
import tvShowNetflixRender from "./components/tvShowNetflixRender.mjs";

(async () => {
    let movie = await fetchMovie(157336);
    // console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

(async () => {
    let series = await fetchTvShowNetflix()
    console.log(series[1].backdrop_path)
    document.getElementById('tvShowNetflix').innerHTML = tvShowNetflixRender(series)
})()