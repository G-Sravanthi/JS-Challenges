function birthdayCakeCandles(ar) {
    const Max = Math.max( ...ar);

    let count = 0;
    for(let value of ar){
        (value === Max) ? count++ : 1;
    }
    console.log(count);
    return count;
}

birthdayCakeCandles([3,2,1,3,3,3]);