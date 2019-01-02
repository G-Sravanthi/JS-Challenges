function miniMaxSum(arr) {

    const { total, min, max } = arr.reduce((acc, val) => ({
        total: acc.total + val,
        min: val < acc.min ? val : acc.min,
        max: val > acc.max ? val : acc.max,
    }), { total: 0, min: arr[0], max: arr[0] });


    console.log(total - max, total - min);
}


miniMaxSum([1, 2, 3, 4, 5]);