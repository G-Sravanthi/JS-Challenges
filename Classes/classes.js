'use strict';

// Functional Classes
function Person(){
    
}

// Using Prototype Property
function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
}

Fruit.prototype.getInformation = function() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let apple = new Fruit('Shimla BabyPink');
console.log(apple.getInformation());

apple.color = 'green';
console.log(apple.getInformation());


// Using Object Literals
let lime = {
    type: 'Mexican lime',
    color: 'green',
    getInformation: function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());

// Function Declarations are hoisted.
// Class Declarations are NOT Hoisted
try {
    let p = new Polygon(1, 2);
    console.log('Polygon p:', p);
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}

//class Declerations
class Polygon {
    // to initilazie the object we need to use Constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}