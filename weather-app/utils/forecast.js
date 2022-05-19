const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  // Weather service
  const accessKey = '295a57c1ccbbc7b74beee59c1519750f'
  const url = 'http://api.weatherstack.com/current?access_key=' + accessKey + '&query=' + latitude + ',' + longitude + '&units=m'
  
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather service!')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      callback(undefined, {
        description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelsLike: body.current.feelslike
      })
    }
  })
}

module.exports = forecast