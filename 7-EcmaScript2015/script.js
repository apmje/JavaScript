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
// CLASS CREATION AND DATA STRUCTURE
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
        let density = parseFloat(this.numOfTrees / this.area).toFixed(2);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
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
    constructor(name, dateBuilt, lengthofStreet) {
        this.name = name;
        this.dateBuilt = dateBuilt;
        this.lengthofStreet = lengthofStreet;
        this.sizeClassification;
    }

    // 8. Assign a size classification to all streets.

    sizeClass() {
        const l = this.lengthofStreet;
        let size = '';

        if (l <= 0.4) {
            size = 'tiny';
        } else if (l > 0.4 && l <= 0.8) {
            size = 'small';
        } else if ((l > 0.8 && l <= 1.2) || l === undefined) {
            size = 'normal';
        } else if (l > 1.2 && l <= 2.3) {
            size = 'big';
        } else {
            size = 'huge';
        }
        this.sizeClassification = size;
    };

};

const street1 = new Street('Ocean Avenue', 1999, 2)
const street2 = new Street('Evergreen Street', 2008, 1.1)
const street3 = new Street('4th Street', 2015, )
const street4 = new Street('Ocean Avenue', 1982, 3.5)

const streetData = new Map();
streetData.set('Street1', street1);
streetData.set('Street2', street2);
streetData.set('Street3', street3);
streetData.set('Street4', street4);

// FUNCTION CONTROLLER
// 4. Create formula for average age of towns park (sumOfAges / numOfParks)
function averageAge(map) {
    let sum, numOfParks = 0,
        a = [];
    for (let [key, value] of map) {
        numOfParks++
        a.push(value.age);
    }
    sum = parseFloat((a.reduce((a, b) => a + b, 0)) / numOfParks).toFixed(2);
    return sum;
};

// 5. Find and display park which has more than 1000 trees.

function numOfTrees(map) {
    for (let [key, value] of map) {
        if (value.numOfTrees > 1000) {
            console.log(`${value.name} has ${value.numOfTrees} trees.`);
        }
    }
};

// 6. Create formula to find the total length of all streets
// 7. Create formula to find average length of the town's streets

function calculateLength(map) {
    let total = 0;
    map.forEach(value => total += value.lengthofStreet)
    return [total, total / map.size];
};1111

function init() {
    const [totalLength, averageLength] = calculateLength(streetData);
    console.log(`----PARK REPORT----`)
    console.log(`Our ${parkData.size} parks have an average age of ${averageAge(parkData)} years.`)
    parkData.forEach(value => value.treeDensity())
    numOfTrees(parkData);
    console.log(`----STREET REPORT----`)
    console.log(`Our ${streetData.size} streets have a total length of ${totalLength} km with an average of ${averageLength} km.`)
    for (let [key, value] of streetData) {
        value.sizeClass();
        console.log(`${value.name}, was built in ${value.dateBuilt} and is a ${value.sizeClassification} street`);
    }
};

init();