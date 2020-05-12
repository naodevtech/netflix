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
  let moviesTrendings = await res.json()
  return moviesTrendings.results
}

export async function fetchTopRated(){
  const url = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=en-US&page=1`
  let res = await fetch(url)
  let moviesRated = await res.json()
  return moviesRated.results
}

export async function fetchActionMovies(){
  const url = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&with_genres=28`
  let res = await fetch(url)
  let moviesAction = await res.json()
  // console.log(action)
  return moviesAction.results
  }

export async function fetchComedyMovies(){
  const url = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&with_genres=35`
  let res = await fetch(url)
  let moviesComedies = await res.json()
  // console.log(comedy)
  return moviesComedies.results
  }

export async function fetchDocumentariesMovies(){
  const url = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&with_genres=99`
  let res = await fetch(url)
  let documentaries = await res.json()
  // console.log(documentaries)
  return documentaries.results
  }