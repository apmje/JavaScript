const ancestryjs = require('./ancestry.js');
const ancestry = JSON.parse(ancestryjs);

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
};

var byName = {};
ancestry.forEach(function (person) {
  byName[person.name] = person;
});

let hasMother = ancestry.filter((person) => byName[person.mother] != null) // TYPE CONVERSION!

let ageDifference = hasMother.map(function (person) {
  return person.born - byName[person.mother].born
});

console.log(average(ageDifference));