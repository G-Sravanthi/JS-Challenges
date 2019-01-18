'use strict';

//flatterning an array of arrays
let samplArray = [[1, 2], [3, 4], [5, 6]];

function flattenedArray(arr) {
    let newArray = arr.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    }, []);
    
    console.log(newArray);
    return newArray;
}

flattenedArray(samplArray);