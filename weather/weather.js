const request = require('request');

const getTemperature = (lat, lon, callback) => {
      request({
            uri:`https://api.darksky.net/forecast/1191f9ebffb31e31905ec44958a10060/${lat},${lon}`,
            json: true
      }, (error, response, body) => {
      if(!error && response.statusCode === 200) {
            callback(undefined, body.currently.temperature
            ) 
        
      }
      else {
            callback('Unable to connect to forecast.io');
      }
})}

module.exports.getTemperature = getTemperature;