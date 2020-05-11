export default function tvShowNetflixRender(props, i) {
    // console.log(props.length)
        return `<img class="movies__container--movie-image" src='https://image.tmdb.org/t/p/original/${props[i].poster_path}' />`
}