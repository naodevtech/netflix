export default function trendingsMoviesRender(trendings, i) {
    return `<img class="movies__container--movie-image"  src='https://image.tmdb.org/t/p/original/${trendings[i].backdrop_path}' />`
}