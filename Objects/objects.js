// creating an Object

// var marks = {};
// var newMarks = new Object();

var studentMarks = {
    "physics": 98,
    "maths": 100,
    "chemistry": 80
};

console.log(studentMarks); // returns studentMarks Object {"physics": 98,"maths" : 100, "chemistry": 80 }

var stringMarks = JSON.stringify(studentMarks); // converts object into String

console.log(stringMarks); // returns sting "{"physics": 98,"maths" : 100, "chemistry": 80 }" 

var marksObject = JSON.parse(stringMarks); // converts String into Object

console.log(marksObject); // return marksObjet object {"physics": 98,"maths" : 100, "chemistry": 80 }


for (let i of Object.keys(studentMarks))
    console.log(i); // returns the list of Key's in studentMarks

for (let j of Object.values(studentMarks))
    console.log(j); // returns the list of Values in studentMarks

// Object.prototype(object)
studentMarks.hasOwnProperty("physics"); // returns true
studentMarks.hasOwnProperty("greek"); // returns false

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};
var newCar = new Car('Honda', 'City', 2007);
console.log(newCar instanceof Car); // returns true


var marks = {physics: 98, maths:95, chemistry: 91};

// Freeze
finalizedMarks = Object.freeze(marks);
finalizedMarks["physics"] = 86; // throws error in strict mode
console.log(finalizedMarks);
console.log(marks); // {physics: 98, maths: 95, chemistry: 91}
console.log(Object.isFrozen(finalizedMarks)); // returns true

// Seal
Object.seal(marks);
delete marks.chemistry; // returns false as operation failed
marks.physics = 95; // Works!
marks.greek = 86; // Will not add a new property
console.log(marks); 
console.log(Object.isSealed(marks)); // returns true