/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

// 1. Store all park information

class Park {
    constructor(name, age, numOfTrees, area) {
        this.name = name;
        this.age = age;
        this.numOfTrees = numOfTrees;
        this.area = area;
    }

    // 3. Create forumla for tree density (numOfTrees / area)
    treeDensity() {
        let density = this.numOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} per square km.`);
    }
    
};

const park1 = new Park('Green Park', 70, 376, 3);
const park2 = new Park('National Park', 200, 1089, 52);
const park3 = new Park('Oak Park', 107, 80, 5);

const parkData = new Map();
parkData.set(1, park1);
parkData.set(2, park2);
parkData.set(3, park3);

// 2. Store all street information

class Street {
    constructor(name, dateBuilt, length) {
        this.name = name;
        this.dateBuilt = dateBuilt;
        this.length = length;
    }
};

const street1 = new Street('Ocean Avenue', 1999, 2)
const street2 = new Street('Evergreen Street', 2008, 1.1)
const street3 = new Street('4th Street', 2015, 0)
const street4 = new Street('Ocean Avenue', 1982, 3.5)

const streetData = new Map();
streetData.set('Street1', street1);
streetData.set('Street2', street2);
streetData.set('Street3', street3);
streetData.set('Street4', street4);

 
// 4. Create formula for average age of towns park (sumOfAges / numOfParks)

function averageAge(map) {
    let sum, numOfParks = 0, a = [];
    for(let [key, value] of map) {
        numOfParks++
        a.push(value.age);
     }
     sum = parseFloat((a.reduce((a, b) => a + b, 0)) / numOfParks).toFixed(2);
     return sum;
};

// 5. Find and display park which has more than 1000 trees.

// 6. Create formula to find the total length of all streets

// 7. Create formula to find average length of the town's streets

// 8. Assign a size classification to all streets.




