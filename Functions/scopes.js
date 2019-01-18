var a = 10; // Global Scope

function Foo() {
    if (true) {
        let a = 4; // Block Scope
        console.log(a);
    }

    alert(a); // alerts '10' because the 'let' keyword
}

Foo();


pi = 3.14;
function circumference(radius) {    
     pi = 3.14159; // function Scope
     console.log(2 * pi * radius); // Prints "12.56636" not "12.56"
}
circumference(2);


// Write a design that takes a string and returns a character at a time. 
// If the new string is given, it should replace old one.

function generator(input) {
    var index = 0;
    return {
         next: function() {
                 if (index < input.length) {
                      index += 1;
                      return input[index - 1];
                 }
                 return "";
         } 
    }
}

var mygenerator = generator("boomerang");

mygenerator.next(); // returns "b"