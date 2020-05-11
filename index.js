import fetchMovie from "./apiService.js";
import Header from "./components/Header.mjs";

(async () => {
    let movie = await fetchMovie(550);
    console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();
