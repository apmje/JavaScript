// var instructorData = {
//     name: "Elie",
//     additionalData: {
//         instructor: true,
//         favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
//         moreDetails: {
//             favoriteBasketballTeam: "New York Knicks",
//             numberOfSiblings: 3,
//             isYoungest: true,
//             hometown: {
//                 city: "West Orange",
//                 state: "NJ",
//             },
//             citiesLivedIn: ["Seattle", "Providence", "New York"]
//         }
//     }
// };

// // Loop over iterable array and log the values using for...of
// // function displayCities() {
// //     const citiesArr = instructorData.additionalData.moreDetails.citiesLivedIn;
// //     for (let value of citiesArr) {
// //         console.log(value);
// //     }
// // }

// // displayCities();

// // // Loop over values of a specific nested object
// // function displayHometownData() {
// //     const hometown = instructorData.additionalData.moreDetails.hometown;
// //     for(let key in hometown)
// //             console.log(hometown[key]);
// // }

// // displayHometownData();

// // function addDetail(key, value) {
// //     const moredetails = instructorData.additionalData.moreDetails;
// //     moredetails[key] = value;
// //     return moredetails;
// // }

// // console.log(addDetail("isHilarious", true));
// // console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]));

// function removeDetail(key) {
//     const moredetails = instructorData.additionalData.moreDetails;
//     delete moredetails[key];
//     return moredetails;
// };

// removeDetail('citiesLivedIn');
// console.log(removeDetail('citiesLivedIn'));
// /*
// {
//     favoriteBasketballTeam: "New York Knicks",
//     numberOfSiblings: 3,
//     isYoungest: true,
//     hometown: {
//         city: "West Orange",
//         state: "NJ",
//     }
// }
// */
// removeDetail('hometown');
// console.log(removeDetail('hometown'));
// /*
// {
//     favoriteBasketballTeam: "New York Knicks",
//     numberOfSiblings: 3,
//     isYoungest: true
// }
// */
// removeDetail('favoriteBasketballTeam');
// console.log(removeDetail('favoriteBasketballTeam'));
// /*
// {
//     numberOfSiblings: 3,
//     isYoungest: true
// }
// */

// var nestedData = {
//     innerData: {
//         order: ["first", "second", "third"],
//         snacks: ["chips", "fruit", "crackers"],
//         numberData: {
//             primeNumbers: [2, 3, 5, 7, 11],
//             fibonnaci: [1, 1, 2, 3, 5, 8, 13]
//         },
//         addSnack: function (snack) {
//             this.snacks.push(snack);
//             return this;
//         }
//     }
// }

// function logPrimeNumbers() {
//     const obj = nestedData.innerData.numberData.primeNumbers;
//     for (let key of obj) {
//         console.log(key);
//     }
// };

// // logPrimeNumbers();

// function logFibonnaciNumbers() {
//     const obj = nestedData.innerData.numberData.fibonnaci;
//     for (let key of obj) {
//         if (key % 2 === 0) {
//             console.log(key);
//         }
//     }
// };

// console.log(logFibonnaciNumbers());

// console.log(nestedData.innerData.order[1]);

// // nestedData.innerData.addSnack('chocolate');
// // console.log(nestedData.innerData.snacks);

// var nestedObject = {
//   speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
//   data: {
//     continents: {
//       europe: {
//         countries: {
//           switzerland: {
//             capital: "Bern",
//             population: 8000000
//           }
//         }
//       }
//     },
//     languages: {
//       spanish: {
//           hello: "Hola"
//       },
//       french: {
//           hello: "Bonjour"
//       }
//     }
//   }
// }


// function addSpeaker(speaker) {
//     const speakers = nestedObject.speakers;
//     speakers.push({name: speaker});
// } ;

// addSpeaker('Anthony')
// console.log(nestedObject.speakers);

// function addLanguage (key, value) {
//     const obj = nestedObject.data.languages;
//     obj[key] = {hello: value};
// };

// addLanguage('english', 'Hello');
// console.log(nestedObject.data.languages);

// function addCountry (key, capital, pop) {
//     const obj = nestedObject.data.continents.europe.countries;
//     obj[key] = {capital: capital, 
//                 population: pop};
// };

// addCountry('uk', 'London', '10000000')
// console.log(nestedObject.data.continents.europe.countries);


// var nestedArr = [[1,2,3], [4,5,6], [7,8,9,10,11,12]];

// for (i = 0; i < nestedArr.length; i++) {
//     for (j = 0; j < nestedArr[i].length; j++) {
//         console.log(nestedArr[i][j])
//     }
// }


var nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
  [9, 10, 11, 12]
];

function printEvens() {
  for (i = 0; i < nestedArr.length; i++) {
    for (j = 0; j < nestedArr[i].length; j++) {
      if (nestedArr[i][j] % 2 === 0) {
        console.log(nestedArr[i][j]);
      }
    }
  }
};

console.log(printEvens());