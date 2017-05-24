// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties. 
// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are 
// also equal when compared with a recursive call to deepEqual. To ﬁnd out whether to compare two things by identity (use the === operator for that) or by 
// looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one 
// silly exception into account: by a historical accident, typeof null also produces "object".

// Create function called deepEqual that accepts two values and returns true only if they are the same or are objects with the same properties


var deepEqual = function (val1, val2) {
    var prop1 = 0,
        prop2 = 0

    if (val1 === val2) {
        return true;
    }

    if (val1 == null || typeof val1 != 'object' || val2 == null || typeof val2 != 'object') {
        return false;
    };

    for (var prop in val1) {
        prop1 += 1;
    };

    for (var prop in val2) {
        prop2 += 1;
        if (!(prop in val1) || !deepEqual(val1[prop], val2[prop])) {
            return false;
        };
    };
    return prop1 == prop2;
};

var obj = {
    here: {
        is: "an"
    },

    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },

    object: 2
}));
// → true