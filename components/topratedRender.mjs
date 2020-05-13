export default function topratedRender(moviesRated, i) {
    if (moviesRated[i].backdrop_path == null){
        return `<img class="movies__container--movie-image" id='${moviesRated[i].id}'src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png' />`
    }
    return `<img class="movies__container--movie-image"  id='${moviesRated[i].id}'src='https://image.tmdb.org/t/p/original/${moviesRated[i].backdrop_path}' />`
}