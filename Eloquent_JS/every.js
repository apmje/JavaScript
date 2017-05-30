function every(array, f) {
    let c = 0;
    for (let value of array) {
        if (f(value)) {
            c++
        }
    }
    return c == array.length;
}

function some(array, f) {
    let c = 0;
    for (let value of array) {
        if (f(value)) {
            c++
        }
    }
    return c > 0;
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false