// Create range function with two arguments start and end that rturns an array containing all numbers from the start to the end.
// Create a sum function with accecpts an array of numbers and returns the total sum of the numbers.
// Run console.log(sum(range(1, 10))); and result should be 55.
// Change range function to take a third argument, 'step', which increments the array numbers by it's value.
// Ensure it works the same as before if no step argument is defined, ensure it works going backwards (negative step value)

function range(start, end, step) {
    var sumArray = [];
    if (start > end) {
        for (var i = start; i >= end; i += step) {
            sumArray.push(i);
        }
    } else {
        for (var i = start; i <= end; i += step) {
            if (step === undefined)
                step = 1;
            sumArray.push(i);
        }
    }
    return sumArray;
}

function sum(sumArray) {
    var sumTotal = 0;
    for (var i = 0; i < sumArray.length; i++) {
        sumTotal += sumArray[i];
    }
    return sumTotal;
}

console.log(range(1, 10));
console.log(range(1, 50, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));