'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Park = function () {
    function Park(name, age, numOfTrees, area) {
        _classCallCheck(this, Park);

        this.name = name;
        this.age = age;
        this.numOfTrees = numOfTrees;
        this.area = area;
    }

    // 3. Create forumla for tree density (numOfTrees / area)


    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            var density = parseFloat(this.numOfTrees / this.area).toFixed(2);
            console.log(this.name + ' has a tree density of ' + density + ' trees per square km.');
        }
    }]);

    return Park;
}();

;

var park1 = new Park('Green Park', 70, 376, 3);
var park2 = new Park('National Park', 200, 1089, 52);
var park3 = new Park('Oak Park', 107, 80, 5);

var parkData = new Map();
parkData.set(1, park1);
parkData.set(2, park2);
parkData.set(3, park3);

// 2. Store all street information

var Street = function () {
    function Street(name, dateBuilt, lengthofStreet) {
        _classCallCheck(this, Street);

        this.name = name;
        this.dateBuilt = dateBuilt;
        this.lengthofStreet = lengthofStreet;
        this.sizeClassification;
    }

    // 8. Assign a size classification to all streets.

    _createClass(Street, [{
        key: 'sizeClass',
        value: function sizeClass() {
            var l = this.lengthofStreet;
            var size = '';

            if (l <= 0.4) {
                size = 'tiny';
            } else if (l > 0.4 && l <= 0.8) {
                size = 'small';
            } else if (l > 0.8 && l <= 1.2 || l === undefined) {
                size = 'normal';
            } else if (l > 1.2 && l <= 2.3) {
                size = 'big';
            } else {
                size = 'huge';
            }
            this.sizeClassification = size;
        }
    }]);

    return Street;
}();

;

var street1 = new Street('Ocean Avenue', 1999, 2);
var street2 = new Street('Evergreen Street', 2008, 1.1);
var street3 = new Street('4th Street', 2015);
var street4 = new Street('Ocean Avenue', 1982, 3.5);

var streetData = new Map();
streetData.set('Street1', street1);
streetData.set('Street2', street2);
streetData.set('Street3', street3);
streetData.set('Street4', street4);

// FUNCTION CONTROLLER
// 4. Create formula for average age of towns park (sumOfAges / numOfParks)
function averageAge(map) {
    var sum = void 0,
        numOfParks = 0,
        a = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            numOfParks++;
            a.push(value.age);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    sum = parseFloat(a.reduce(function (a, b) {
        return a + b;
    }, 0) / numOfParks).toFixed(2);
    return sum;
};

// 5. Find and display park which has more than 1000 trees.

function numOfTrees(map) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                key = _step2$value[0],
                value = _step2$value[1];

            if (value.numOfTrees > 1000) {
                console.log(value.name + ' has ' + value.numOfTrees + ' trees.');
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
};

// 6. Create formula to find the total length of all streets
// 7. Create formula to find average length of the town's streets

function calculateLength(map) {
    var total = 0;
    map.forEach(function (value) {
        return total += value.lengthofStreet;
    });
    return [total, total / map.size];
};

function init() {
    var _calculateLength = calculateLength(streetData),
        _calculateLength2 = _slicedToArray(_calculateLength, 2),
        totalLength = _calculateLength2[0],
        averageLength = _calculateLength2[1];

    console.log('----PARK REPORT----');
    console.log('Our ' + parkData.size + ' parks have an average age of ' + averageAge(parkData) + ' years.');
    parkData.forEach(function (value) {
        return value.treeDensity();
    });
    numOfTrees(parkData);
    console.log('----STREET REPORT----');
    console.log('Our ' + streetData.size + ' streets have a total length of ' + totalLength + ' km with an average of ' + averageLength + ' km.');
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = streetData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                key = _step3$value[0],
                value = _step3$value[1];

            value.sizeClass();
            console.log(value.name + ', was built in ' + value.dateBuilt + ' and is a ' + value.sizeClassification + ' street');
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
};

init();
