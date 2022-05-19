const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2];
if (location) {
  geocode(location, (error, geocodeData) => {
    if (error) {
      return console.log(error)
    }
  
    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(geocodeData.location)
      console.log(forecastData)
    })
  })
} else {
  console.log('Please input location')
}
