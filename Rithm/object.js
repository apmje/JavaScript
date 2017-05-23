// var namesAndHobbies = {
//     elie: "JavaScript",
//     matt: "jogging",
//     janey: "table building",
//     tim: "sailing",
//     anthony: "films"
// };

// for (var key in namesAndHobbies) {
//     console.log(namesAndHobbies[key] + ' => ' + key)
// };

// if ("anthony" in namesAndHobbies) {
//     console.log(key + ' ' + namesAndHobbies["anthony"]);
// }


var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go")
console.log(programming);

programming.difficulty = 7;
console.log(programming);

delete programming.jokes;
console.log(programming);

programming.isFun = true;
console.log(programming);

for (i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

for (var key in programming) {
    console.log(key);
};

for (var key in programming) {
    console.log(programming[key]);
};