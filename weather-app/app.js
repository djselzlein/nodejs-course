const request = require('postman-request')
const geocode = require('./utils/geocode')

// Weather service
const coordinates = '37.8267,-122.4233'
const weatherServiceAccessKey = '295a57c1ccbbc7b74beee59c1519750f'
const weatherService = 'http://api.weatherstack.com/current?access_key=' + weatherServiceAccessKey
  + '&query=' + coordinates + '&units=m'

// request({ url: weatherService, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     const current = response.body.current
//     console.log(current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degrees out.' +
//       ' It feels like ' + current.feelslike + ' degrees out.')
//   }
// })

geocode('Philadelphia New York', (error, data) => {
  console.log(data)
})
