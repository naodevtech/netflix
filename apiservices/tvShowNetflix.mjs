const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "api_key=e3d354db0d51107a2f24bc1796fb8017";
const fr = '&language=fr'
const en = '&language=en'

function fetchTvShowNetflix(){
    const url = `https://api.themoviedb.org/3/tv/popular?with_networks=213&${API_KEY}`
    return fetch(url)
    .then( res => { return res.json()})
    .then(series => {
      console.log(series.results)
      return series.results
    })
}
export default fetchTvShowNetflix