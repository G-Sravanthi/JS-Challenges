class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    perimeter(){
        return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue );
    }
}


// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3,4,5]);

// Print triangele
console.log(triangle);

// Print the perimeter
console.log(triangle.perimeter());





// An important difference between function declarations and class declarations:
//  => function declarations are hoisted (i.e., can be referenced before they're declared).
//  => but class declarations are not. 
// This means we must first declare our class before attempting to access (or reference) it; 
//if we fail to do so, our code throws a ReferenceError.