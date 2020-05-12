export default function trendingsMoviesRender(moviesTrendings, i) {
    if (moviesTrendings[i].backdrop_path == null){
        return `<img class="movies__container--movie-image" src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png' />`
    }
    return `<img class="movies__container--movie-image"  src='https://image.tmdb.org/t/p/original/${moviesTrendings[i].backdrop_path}' />`
}