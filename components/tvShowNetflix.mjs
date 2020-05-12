export default function tvShowNetflix(series, i) {
    return `<img class="movies__container--movie-image" src='https://image.tmdb.org/t/p/original/${series[i].poster_path}' />`
}