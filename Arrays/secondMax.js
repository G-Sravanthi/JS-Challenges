function getSecondLargest(nums){
    const max = Math.max(...nums);

    console.log(...nums.filter(x => x !== max));

    return Math.max(...nums.filter(x => x !== max));
}


getSecondLargest([1,2,6,6,5]);