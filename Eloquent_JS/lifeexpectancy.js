const ancestryjs = require('./ancestry.js');
const ancestry = JSON.parse(ancestryjs);

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

let centuries = {};
for (let person of ancestry) {
    let century = Math.ceil(person.died / 100);
    if (!centuries[century]) {
        centuries[century] = [];
        centuries[century].push(person.died - person.born);
    } else {
        centuries[century].push(person.died - person.born);
    }
}

for (let key in centuries) {
       console.log(`${key}: ${Math.round(average(centuries[key]) * 10) / 10}`)
}


// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94