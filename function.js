// function difference(num1, num2) {
//     return num1 - num2;
// };

// function product(num1, num2) {
//     return num1 * num2;
// }

// function printDay(daynum) {
//     const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return day[daynum - 1];
// };

// function lastElement(arr) {
//     return arr[arr.length - 1];
// };

// console.log(lastElement([1, 2, 3, 4, 5]))

// function numberCompare(num1, num2) {
//     if (num1 > num2) {
//         console.log('First is greater');
//     } else if (num2 > num1) {
//         console.log('Second is greater');
//     } else {
//         console.log('Numbers are equal');
//     }
// };

// numberCompare(10, 5);

// function singleLetterCount(word, letter) {
//     let count = 0;
//     for (let value of word) {
//         if (value.toLowerCase() === letter.toLowerCase()) {
//             count++
//         }
//     }
//     return count;
// };

// console.log(singleLetterCount('mccormick', 'C'));

// function multipleLetterCount(str) {
//     let obj = {};
//     for (let value of str) {
//         if (!(value in obj)) {
//             obj[value] = 1;
//         } else {
//             obj[value]++
//         }
//     }
//     return obj;
// };
// console.log(multipleLetterCount('mccormick'));

// /*
// If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.
// */

// function arrayManipulation(arr, com, loc, val) {
//     if (com === 'add' && loc === 'end') {
//         arr.push(val);
//         return arr;
//     } else if (com === 'add' && loc === 'start') {
//         arr.unshift(val);
//         return arr;
//     } else if (com === 'remove' && loc === 'end') {
//         return arr.pop()
//     } else if (com === 'remove' && loc === 'start') {
//         return arr.shift();
//     }
// };

// console.log(arrayManipulation([1, 2, 3], "remove", "end")); // 3
// console.log(arrayManipulation([1, 2, 3], "remove", "start")); // 1
// console.log(arrayManipulation([1, 2, 3], "add", "start", 20)); // [20,1,2,3]
// console.log(arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]


// function isPalindrome(str) {
//     for (i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - i - 1])
//         return false;
//     }
//     return true;
// };

// console.log(isPalindrome('mccormick'));
// console.log(isPalindrome('racecar'));

// // Non-branching with recursion, no idea
// // function isPalindrome(s, i) {
// //     return (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i);
// // }
// // console.log(isPalindrome('test'));
// // console.log(isPalindrome('racecar'));


// // Rock / Paper / Scissor
// // using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - t
// // hey can either tie/win or lose against a computer.


function game() {
    const gameArr = ['rock', 'paper', 'scissor'];
    let enemySelection,
        userSelection = prompt('Please enter rock, paper or scissor or type quit to exit the game').toLowerCase();

    function enemy() {
        let num = Math.floor(Math.random() * 3);
        return gameArr[num];
    };

    enemySelection = enemy();
    if (gameArr.indexOf(userSelection) === -1) {
        alert(`Please select a valid value!`);
    } else if (userSelection === enemySelection) {
        alert(`It's a draw! Computer selected ${enemySelection}.`);
    } else if (enemySelection === 'scissor' && userSelection === 'paper' ||
        enemySelection === 'paper' && userSelection === 'rock' ||
        enemySelection === 'rock' && userSelection === 'scissor') {
        alert(`You lose! Computer selected ${enemySelection}.`)
    } else if (userSelection === 'quit') {
        return alert(`Thanks for playing!`);
    } else {
        alert(`You win! Computer selected ${enemySelection}.`)
    }
    return game();
};

game();
