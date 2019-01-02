function duplicateArray(anArray){

    // let newArray = [...anArray];

    let newArray = anArray.slice();

    for(let i of anArray){
        newArray.push(i);
    }

    console.log(newArray);
    return newArray;
}

duplicateArray(['guna']);