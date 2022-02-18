import axios from 'axios'

let languages = []

//Get api languages
const url = `${process.env.REACT_APP_URL}/configuration/languages?api_key=${process.env.REACT_APP_API_KEY}`

export const languagesConfig = axios.get(url)
.then(res => {
    languages = res.data.map(item => {
        return {
            label: item.english_name,
            value: item.iso_639_1
        }
    })
    return languages
})
