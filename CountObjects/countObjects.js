function getCount(objects) {
    // let count = 0;

    // for(let o in objects){
    //    if(objects[o].x == objects[o].y) count++;
    // }

    // return count;

    let countValue = objects.reduce((count,o) => o.x === o.y ? count+1 : count, 0);

    console.log(objects);
    console.log(countValue);
    return countValue;
}



let inputObj = [   
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 } 
];

getCount(inputObj);
  