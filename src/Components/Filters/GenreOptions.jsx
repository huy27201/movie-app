import axios from 'axios'

let genres = [ 
    { 
        label: '- Tất cả -', 
        value: '' 
    } 
]
const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=93575fc50e306d7f610ab205e9f80ee4&language=vi`
axios.get(url)  //Get api thể loại
    .then(res => {
        genres = res.data.genres.map(item => {
            return {
                label: item.name,
                value: item.id
            }
        })
        genres.unshift({ 
            label: '- Tất cả -',
            value: '' 
        })
    })
    .catch(err => console.log(err))
console.log(genres)

export { genres }