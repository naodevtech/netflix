export default function comedyMoviesRender(moviesComedies, i) {
    if (moviesComedies[i].backdrop_path == null){
        return `<img class="movies__container--movie-image" id='${moviesComedies[i].id}'src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png' />`
    }
    return `<img class="movies__container--movie-image"  id='${moviesComedies[i].id}'src='https://image.tmdb.org/t/p/original/${moviesComedies[i].backdrop_path}' />`
   
}