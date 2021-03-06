const API_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "api_key=e3d354db0d51107a2f24bc1796fb8017"

export async function fetchMovie(movieId) {
  const url = `${API_URL}${movieId}?${API_KEY}`
  let res = await fetch(url)
  let movie = await res.json()
  // console.log(movie)
  return movie;
}

export async function fetchVideoMovie(movieId) {
  const url = `${API_URL}${movieId}/videos?${API_KEY}&language=en-US`
  let res = await fetch(url)
  let video = await res.json()
  // console.log(video)
  return video.results[0].key
}

export async function fetchTvShowNetflix(){
  const url = `https://api.themoviedb.org/3/tv/popular?with_networks=213&${API_KEY}`
  let res = await fetch(url);
  let series = await res.json()
  // console.log(series)
  return series.results;
}

export async function fetchMoviesTrendings(){
  const url = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`
  let res = await fetch(url)
  let moviesTrendings = await res.json()
  // console.log(moviesTrendings)
  return moviesTrendings.results
}

export async function fetchTopRated(){
  const url = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=en-US&page=1`
  let res = await fetch(url)
  let moviesRated = await res.json()
  // console.log(moviesRated)
  return moviesRated.results
}

export async function fetchByGenreMovies(genre) {
  const url = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&with_genres=${genre}`
  let res = await fetch(url)
  let moviesByGenre = await res.json()
  // console.log(moviesByGenre)
  return moviesByGenre.results
  
}


export async function fetchInfosModal(urlDefault, id) {
  const url = `${urlDefault}${id}?${API_KEY}`
  let res = await fetch(url)
  let infosProgram = await res.json()
  // console.log(infosProgram)
  return infosProgram;
}

export async function fetchSearching(urlDefault, search) {
  const url = `${urlDefault}?${API_KEY}&include_adult=false&language=en-US&query=${search}`
  let res = await fetch(url)
  let infosProgram = await res.json()
  // console.log(infosProgram)
  return infosProgram.results;
}

export async function fetchGenerateToken() {
  const url = `https://api.themoviedb.org/3/authentication/token/new?${API_KEY}`
  let res = await fetch(url)
  let token = await res.json()
  // console.log(token)
  return token.request_token
}

// export async function fetchAuthentification(token) {
//   const url = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http:/http://127.0.0.1:5501//approved`
//   let res = await fetch(url)
//   let authentification = await res.json()
//   console.log(authentification)
//   return authentification.sucess;
// }