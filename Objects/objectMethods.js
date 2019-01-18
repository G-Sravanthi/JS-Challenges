var mathLib = {
    pi: 3.14,
    area: function(r) {
        return this.pi * r * r;
    },
    circumference: function(r) {
        return 2 * this.pi * r;
    }
};

console.log(mathLib.area(2));  // 12.56

console.log(mathLib.area.call({pi: 3.14159}, 2)); //12.56636


// 'Call' function takes two arguments: 
// 1. Context (Object replaces with 'This'). 
// 2. Function arguments  Ex: .call({}, funcgionArguments) 

var cylinder = {
    pi: 3.14,
    volume: function(r, h) {
        return this.pi * r * r * h;
    }
};

console.log(cylinder.volume.call({pi: 3.14159}, 2, 6));  // 75.39815999999999

// 'Apply' is exactly same except Function arguments are passed as a list.

console.log(cylinder.volume.apply({pi: 3.14159}, [2, 6]));  // 75.39815999999999


var newVolume = cylinder.volume.bind({pi: 3.14159}); 
newVolume(2,6); // Now pi is 3.14159

// Bind? It allows us to inject a context into a function which returns a new function with updated context. 
// It means this variable will be user supplied variable.
