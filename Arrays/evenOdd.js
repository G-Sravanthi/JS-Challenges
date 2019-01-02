function modifyArray(nums) {
    return nums.map(n => n%2 ? n*3: n*2);
    // return nums.map(n => n%2===0 ? n*2: n*3);
}

// If the element is even, multiply the element by 2
// If the element is odd, multiply the element by 3

let arr = [1, 2, 3, 4, 5, 6];
console.log(modifyArray(arr));