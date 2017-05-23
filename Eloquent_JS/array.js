var arr = [];

arr.unshift("Anthony");
arr.push("McCormick");
arr.unshift("Purple");

console.log(arr);

arr.shift();

var arr2 = [];

arr2.push(11);
arr2.push("JavaScript");

console.log(arr);
console.log(arr2);

console.log(arr2.indexOf(11));

var combinedArr = arr.concat(arr2);

console.log(combinedArr);

var arr = ["JavaScript", "Python", "Ruby", "Java"]
var arr1 = ["Haskell", "Clojure"];

console.log(arr.slice(1, 3).concat(arr1));

console.log(arr.join(", "));


var people = ["Greg", "Mary", "Devon", "James"];

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.shift();

console.log(people);

people.pop()

console.log(people);

people.unshift("Matt");

people.push("Anthony");

console.log(people);

for (i = 0; i < people.indexOf("Mary") + 1; i++) {
    console.log(people[i])
}

console.log(people.slice(2, 5));
console.log(people.indexOf("Mary"));
console.log(people.indexOf("foo"));

var people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, "Elizabeth", "Artie")

console.log(people);

var withBob = people.concat("Bob");

console.log(withBob);

