export default function documentariesMoviesRender(moviesByGenre, i) {
    // console.log(moviesByGenre)
    if (moviesByGenre[i].backdrop_path == null){
        return `<img class="movies__container--movie-image"  id='${moviesByGenre[i].id}' src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png' />`
    }
    return `<img class="movies__container--movie-image" id='${moviesByGenre[i].id}' src='https://image.tmdb.org/t/p/original/${moviesByGenre[i].backdrop_path}' />`
   
}