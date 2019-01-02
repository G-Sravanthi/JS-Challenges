function factorial(number){
    return (number === 1) ? 1: number * factorial(number-1);
};

factorial(4);
console.log(factorial(4));