// Create arrayToList function which build up an object like the one in the example. 1 > 2 > 3
// Create listToArray function that creates an array from one of the lists.
// Create 'helper' functions, prepend which takes an element and a list creates a new list that adds the element to the front &
// create nth function which takes a list and a number and returns the element at the given position in the list or undefined if no element exists. This should be recursive (calls itself)

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list) {
    return {value: element, rest: list}
}

function nth(list, n) {
    if (list === null)
        return undefined;
    else if
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20