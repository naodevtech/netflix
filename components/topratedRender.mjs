export default function topratedRender(rated, i) {
    return `<img class="movies__container--movie-image"  src='https://image.tmdb.org/t/p/original/${rated[i].backdrop_path}' />`
}