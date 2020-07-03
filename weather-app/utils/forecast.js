const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4da5e3b2c41277a5a7abd4fff4b39563&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services...', undefined)
        } else if (body.error) { 
            callback('Unable to find location. Check your search and try again...', undefined) 
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain today.')
        }
    })
}


module.exports = forecast