// export const countries = [
//     {
//         value: '',
//         label: '- Tất cả -'
//     }, {
//         value: 'en',
//         label: 'Âu Mỹ'
//     }, {
//         value: 'ko',
//         label: 'Hàn Quốc'
//     }, {
//         value: 'fr',
//         label: 'Pháp'
//     }, {
//         value: 'ja',
//         label: 'Nhật Bản'
//     }, {
//         value: 'cn',
//         label: 'Trung Quốc'
//     }, {
//         value: 'th',
//         label: 'Thái Lan'
//     }, {
//         value: 'de',
//         label: 'Đức'
//     }, {
//         value: 'it',
//         label: 'Ý'
//     }, {
//         value: 'ru',
//         label: 'Nga'
//     }, {
//         value: 'fi',
//         label: 'Phần Lan'
//     }
// ]
import axios from 'axios'

let countries = []

//Get api quốc gia
const url = `${process.env.REACT_APP_URL}/configuration/countries?api_key=${process.env.REACT_APP_API_KEY}`

axios.get(url)
.then(res => {
    // movie 
    console.log(res);
    countries = res.data.map(item => {
        return {
            label: item.name,
            value: item.iso_639_1
        }
    })
    countries.unshift({ 
        label: '- Tất cả -',
        value: '' 
    })
    console.log(countries);
})
.catch(err => console.log(err))

export { countries }


