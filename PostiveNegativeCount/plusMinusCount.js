function plusMinus(arr) {

    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let arrayLength = arr.length;

    for (let value of arr) {
        if (value > 0)
            positiveCount++;
        if (value < 0)
            negativeCount++;
        if (value === 0)
            zeroCount++;
    }

    console.log((positiveCount / arrayLength).toFixed(6));
    console.log((negativeCount / arrayLength).toFixed(6));
    console.log((zeroCount / arrayLength).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);