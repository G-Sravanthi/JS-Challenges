function This(){
    console.log(this); 
}

This(); // return Window Object => this refrers to Global Context in the window.

function testThis(){
    console.log(this);
}

var food = { fruitName: 'Apple'};

testThis(food); // {fruitName: 'Apple'}

var person = {
    name: "Stranger",
    age: 24,
    get identity() {
        return {who: this.name, howOld: this.age};
    }
}

console.log(person.identity); // returns {who: "Stranger", howOld: 24}