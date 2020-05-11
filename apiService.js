const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=e3d354db0d51107a2f24bc1796fb8017";

export default function fetchMovie(movieId) {
  const url = `${API_URL}${movieId}${API_KEY}`;
  return fetch(url)
    .then(res => { return res.json()})
    .then(movie => {
    console.log(movie)
      return movie;
  })
}