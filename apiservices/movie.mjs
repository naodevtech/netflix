const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "api_key=e3d354db0d51107a2f24bc1796fb8017";
const fr = '&language=fr'
const en = '&language=en'

function fetchMovie(movieId) {
  const url = `${API_URL}${movieId}?${API_KEY}${en}`
  return fetch(url)
    .then(res => { return res.json()})
    .then(movie => {
    console.log(movie)
      return movie;
  })
}

export default fetchMovie