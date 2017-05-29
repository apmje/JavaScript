// const profile = require('./profile.js');

// const users = process.argv.slice(2);
// for (let username of users) {
//     profile.get(username);
// };

const weather = require('./weather.js');

const location = process.argv.slice(2);
for (let value of location) {
    weather.getWeather(value);
}
