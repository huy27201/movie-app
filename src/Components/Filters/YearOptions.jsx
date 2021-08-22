let date = new Date()
let years = []
for (let i = 1990; i <= date.getFullYear(); i++) 
    years.unshift({label: i, value: i})
years.unshift({label: '- Tất cả -', value: ''})

export { years }
