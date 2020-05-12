export default function actionMoviesRender(moviesByGenre, i) {
    if (moviesByGenre[i].backdrop_path == null){
        return `<img class="movies__container--movie-image" src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png' />`
    }
    return `<img class="movies__container--movie-image"  src='https://image.tmdb.org/t/p/original/${moviesByGenre[i].backdrop_path}' />`
   
}