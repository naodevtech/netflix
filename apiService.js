const API_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "api_key=e3d354db0d51107a2f24bc1796fb8017"

export async function fetchMovie(movieId) {
  const url = `${API_URL}${movieId}?${API_KEY}`
  let res = await fetch(url)
  let movie = await res.json()
  return movie;
}

export async function fetchTvShowNetflix(){
  const url = `https://api.themoviedb.org/3/tv/popular?with_networks=213&${API_KEY}`
  let res = await fetch(url);
  let series = await res.json()
  return series.results;
}

export async function fetchMoviesTrendings(){
  const url = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`
  let res = await fetch(url)
  let trendings = await res.json()
  return trendings.results
}

export async function fetchTopRated(){
  const url = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=en-US&page=1`
  let res = await fetch(url)
  let rated = await res.json()
  return rated.results
}
