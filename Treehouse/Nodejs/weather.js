const http = require('http');
const api = require('./api.json');

function printWeather(result) {
    console.log(`In ${result.name}, ${result.sys.country}, you can expect ${result.weather[0].description} with temperatures of ${Math.round(result.main.temp)} celsius.`)
}

function getWeather(location) {
    try {
        const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${api.temp}&APPID=${api.key}`, response => {
            if (response.statusCode === 200) {
                let body = "";
                response.on('data', data => {
                    body += data;
                });
                response.on('end', () => {
                    try {
                        const result = JSON.parse(body);
                        printWeather(result);
                    } catch (error) {
                        console.error(error);
                    }
                })
            } else {
                const message = `There was an error getting the weather data for ${location} (${http.STATUS_CODES[response.statusCode]})`
                const statusCodeError = new Error(message);
                console.error(statusCodeError);
            }
        });
        request.on('error', error => console.error(error));

    } catch (error) {
        console.error(error);
    }
}

module.exports.getWeather = getWeather;