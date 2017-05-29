var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
    return array.reduce((a, b) => {
        return a.concat(b);
    })
}

console.log(flatten(arrays));