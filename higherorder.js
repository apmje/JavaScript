// this function should accept 2 parameters, put them in!
function each(array, fn) {
    for (let value of array) {
        fn(value);
    }
}


each([1, 2, 3, 4], function (val) {
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1, 2, 3, 4], function (val) {
    console.log(val * 2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8

function map(array, fn) {
    const newArray = [];
    for (let value of array) {
        newArray.push(fn(value));
    }
    return newArray;
}

map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]


function reject(array, fn) {
    const newArray = [];
    for (let value of array) {
        if (!fn(value))   
        newArray.push(value);
    }
    return newArray;
}

console.log(reject([1,2,3,4], function(val){
    return val > 2;
})); // [1,2]

console.log(reject([2,3,4,5], function(val){
    return val % 2 === 0;
})); // [3,5]

console.log("first");
setTimeout(function(){
    console.log("second");
},0);
console.log("third");


function createCounter() {
    let count = 0;
    return () => {
        count++
        return count;
    }
};


var firstCounter = createCounter();

console.log(firstCounter()); // 1
console.log(firstCounter()); // 2
console.log(firstCounter()); // 3
console.log(firstCounter()); // 4

var secondCounter = createCounter();

console.log(secondCounter()); // 1
console.log(secondCounter()); // 2
console.log(secondCounter()); // 3

console.log(firstCounter()); // 5
console.log(firstCounter()); // 6

console.log(secondCounter()); // 4

function countDown(num) {
    let timerId = setInterval(function () {
        if (num > 0) {
            console.log(num--);
        } else {
            console.log('Done!');
            clearInterval(timerId);
        }
    }, 1000);
};

countDown(4);

function randomGame() {
    let counter = 0;
    let timerId = setInterval(function () {
        let random = Math.random();
        counter++;
        if (random > 0.75) {
            clearInterval(timerId);
            console.log(counter);
        }
    }, 1000);
};

randomGame();

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function isOdd(num) {
    if (num % 2 === 0) {
        return false;
    }
    return true;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};

function numberFact(num, fn) {
    return fn(num);
};

console.log(numberFact(5, isOdd))

function find(arr, fn) {
      for (let value of arr) {
          if (fn(value)) {
              return value;
          }
    }
};

console.log(find([8,11,4,27], function(val){return val >= 10})); // 11
console.log(find([8,11,4,27], function(val){return val === 5})); // undefined

function findIndex(arr, fn) {
    for (let value of arr) {
        if (fn(value))
            return arr.indexOf(value);
    }
};

// returns 1 (index of the first value greater than or equal to 10)
console.log(findIndex([8,11,4,27], function(val){return val >= 10}));

console.log(findIndex([8,11,4,27], function(val){return val === 7})); // undefined

function specialMultiply(val1, val2) {
    if (arguments.length > 1) {
        return val1 * val2;
    } else {
        return function (val2) {
            return val1 * val2;
        }
    }
};

console.log(specialMultiply(3, 4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // returns a function