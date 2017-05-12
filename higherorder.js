// // this function should accept 2 parameters, put them in!
// function each(array, fn) {
//     for (let value of array) {
//         fn(value);
//     }
// }


// each([1, 2, 3, 4], function (val) {
//     console.log(val);
// });
// // Here is what should be output if you wrote the function correctly

// // 1
// // 2
// // 3
// // 4

// each([1, 2, 3, 4], function (val) {
//     console.log(val * 2);
// });

// // Here is what should be output if you wrote the function correctly

// // 2
// // 4
// // 6
// // 8

// function map(array, fn) {
//     const newArray = [];
//     for (let value of array) {
//         newArray.push(fn(value));
//     }
//     return newArray;
// }

// map([1,2,3,4], function(val){
//     return val * 2;
// }); // [2,4,6,8]


// function reject(array, fn) {
//     const newArray = [];
//     for (let value of array) {
//         if (!fn(value))   
//         newArray.push(value);
//     }
//     return newArray;
// }

// console.log(reject([1,2,3,4], function(val){
//     return val > 2;
// })); // [1,2]

// console.log(reject([2,3,4,5], function(val){
//     return val % 2 === 0;
// })); // [3,5]

console.log("first");
setTimeout(function(){
    console.log("second");
},0);
console.log("third");