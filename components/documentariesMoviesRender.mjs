export default function documentariesMoviesRender(documentaries, i) {
    // console.log(documentaries)
    if (documentaries[i].backdrop_path == null){
        return `<img class="movies__container--movie-image" src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png' />`
    }
    return `<img class="movies__container--movie-image"  src='https://image.tmdb.org/t/p/original/${documentaries[i].backdrop_path}' />`
   
}