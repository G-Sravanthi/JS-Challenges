'use strict';

// remove the misplaced letters in the array elements
let data = ["2345-34r", "2e345-211", "543-67i4", "346-598"];
let re = /[a-z A-Z]/;
let cleanedData = data.map( elem => {return elem.replace(re, "")} );
console.log(cleanedData); // ["2345-34", "2345-211", "543-674", "346-598"]


// Find the lenght of string in array element
const arrayString = ['first', 'second', 'third', 'fourth', 'fifth'];
const len = arrayString.map(s => s.length);
console.log('Array:', arrayString);
console.log('Lengths:', len);

// Even or Odd
function modifyArray(nums) {
    return nums.map(n => n%2 ? n*3: n*2);
    // return nums.map(n => n%2===0 ? n*2: n*3);
}

// If the element is even, multiply the element by 2
// If the element is odd, multiply the element by 3

let arr = [1, 2, 3, 4, 5, 6];
console.log(modifyArray(arr));