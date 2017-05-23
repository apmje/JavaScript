// Create reverseArray function that accepts an array as an argument and produces a new array that contains the same elements in the inverse order. - Pure Return
// Create reverseArrayInPlace function which accepts an array as an argument and reverses it's elements within the same array. - Side Effect

function reverseArray(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) { // Loops from 0, incrementing by 1 until we reach half way through the array 
        (array.length / 2 = 8 / 2 = 4)                       // and then increases i by 1, pushing it closer to the middle. If a number is odd, Math.floor will round the halfed value down.
        var old = array[i];                                  // Puts current value i.e. array[0] = A, array[1] = B into variable old.
        array[i] = array[array.length - 1 - i];              // Replaces the content of array from above with the last value of an array minus the i variable, which causes it to move in from end to the middle.
        array[array.length - 1 - i] = old;                   // Replaces the last array from the end with the value in old, which is from the start.
    }
    return array;
}
console.log(reverseArray(["A", "B", "C", "D"]));
// → ["C", "B", "A"];
var arrayValue = ["A", "B", "C", "D", "E", "F", "G", "H"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]