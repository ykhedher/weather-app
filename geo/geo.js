const request = require('request');
const geoAddress = (address, callback) => {
      request({
            url:`http://ip-api.com/json/${encodeURIComponent(address)}`,
            json: true
      }, (error, response, body) => {
            if (error) {
                  callback('Unable to connect to the server');
            }
            else if (body.status === 'fail') {
                   callback('Unable to find the address')
            }
            else if (body.status === 'success'){
                  callback(undefined, {
                        lat: body.lat,
                        lon: body.lon
                  }) 
            }
      }); 
}

module.exports.geoAddress = geoAddress;