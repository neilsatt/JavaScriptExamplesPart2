// Using let and const - ES2015
// var isn't recommended/used as much anymore


// const = constant value, keeps them from being overwritten
// block level scoping - anything between curly braces
const pi = 3.14159;

// let = used when you want to reassign values, works well with for loops
// i is unique for each pass through the loop
for (let i = 0; i < buttons.length; i++){
    const button = buttons[i];
    button.addEventListener("click", function() {
        alert("Button " + i + " Pressed");
    })
}

// Arrow function syntax - new method for writing functions
// Helpful with scope issues 
const sayHello = () => {
    console.log("Hello");
}

// Old version with function declaration
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}

// Old version with function expression 
const sayName = function() {
    const message = "My name is " + name;
    console.log(message);
}

// To convert to arrow function
const sayName = () =>  {
     const message = "My name is " + name;
     console.log(message);
}

// Another example 
function multiply (x, y) {
    return x * y;
}

const multiply = (x,y) => {
    return x * y;
}

// Reduce the amount of code
const square = (x) => {
    return x * x;
}

// becomes
const square = x => x * x;





