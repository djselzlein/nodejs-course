const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Philadelphia New York', (error, data) => {
  console.log(error)
  console.log(data)
})

forecast(44.154622, -75.708847, (error, data) => {
  console.log(error)
  console.log(data)
})
