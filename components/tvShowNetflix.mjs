export default function tvShowNetflix(series, i) {
    if (series[i].backdrop_path == null){
        return `<img class="movies__container--movie-image" id='${series[i].id}' src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png' />`
    }
    return `<img class="movies__container--movie-image" id='${series[i].id}' src='https://image.tmdb.org/t/p/original/${series[i].poster_path}' />`
}