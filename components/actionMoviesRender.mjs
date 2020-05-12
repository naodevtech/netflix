export default function actionMoviesRender(action, i) {
    console.log(actionMoviesRender)
    return `<img class="movies__container--movie-image"  src='https://image.tmdb.org/t/p/original/${action[i].backdrop_path}' />`
   
}