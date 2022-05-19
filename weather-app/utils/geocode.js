const request = require('postman-request')

// Geolocation service
const geocode = (address, callback) => {
  const geocodeAccessToken = 'pk.eyJ1IjoiZGplaXNvbi1zZWx6bGVpbiIsImEiOiJjbDNjN2picjQwNWlpM2VueDg3OHBpcWx5In0.VYLEfQXtVda_zfGVPtE8WA'
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + geocodeAccessToken + '&limit=1'

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location service!')
    } else if (response.body.features.length === 0) {
      callback('Unable to find location')
    } else {
      const feature = response.body.features[0]
      callback(undefined, {
        latitude: feature.center[1],
        longitude: feature.center[0],
        location: feature.place_name
      })
    }
  })
}

module.exports = geocode