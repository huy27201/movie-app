import axios from 'axios'

let movieGenres = [], tvGenres = []

//Get api thể loại
const movieUrl = `${process.env.REACT_APP_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=vi`
const tvUrl = `${process.env.REACT_APP_URL}/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=vi`

export const genresConfig = axios.all([axios.get(movieUrl), axios.get(tvUrl)])
.then(axios.spread((movieData, tvData) => {
    // movie 
    movieGenres = movieData.data.genres.map(item => {
        return {
            label: item.name,
            value: item.id
        }
    })

    // tv
    tvGenres = tvData.data.genres.map(item => {
        return {
            label: item.name,
            value: item.id
        }
    })
    return { movieGenres, tvGenres }
}))
.catch(err => console.log(err))
