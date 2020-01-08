const axios = require('axios');
const yargs = require('yargs');
const ip = require('ip');
const argv = yargs
      .options({
            a: {
                  demand: true,
                  alias: 'address',
                  describe: 'address to fetch weather for',
                  string: true
            }
})
.help()
.alias('help', 'h')
.argv
var url = `http://ip-api.com/json/${encodeURIComponent(argv.a)}`
axios.get(url)
.then((response)=> {
      if (response.data.status === 'fail') {
            throw new Error('Unable to find that address')
      }
      var lon = response.data.lon;
      var lat = response.data.lat;
      var weatherURL = `https://api.darksky.net/forecast/1191f9ebffb31e31905ec44958a10060/${lat},${lon}`
      return axios.get(weatherURL)
      
}).then((res) => {
      console.log(`${res.data.hourly.summary} \nCurrent temperature: ${res.data.currently.temperature}°`)
}) 
.catch((e) => {
      if (e.code === 'ENOTFOUND'){
      console.log("Unable to connect to API SERVER,")
      }
      else {
            console.log(e.message);
      }
}) 