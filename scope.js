//local scope 
const x = 10;

function display() {
    let y = 20; // local variable
    console.log(x); // Accessing global variable
    console.log(y); // Accessing local variable
}

display(); // Output: 10, 20
// console.log(y); // Uncaught ReferenceError: y is not defined (y is not accessible outside the function)


// global scope
var name = "John";

function greet() {
    // local scope
    var greeting = "Hello, " + name + "!";
    console.log(greeting);
}

greet(); // Output: Hello, John!

// nested functions and scope
function outerFunction() {
    var outerVariable = "I am from the outer function.";

    function innerFunction() {
        var innerVariable = "I am from the inner function.";
        console.log(outerVariable); // Accessing variable from outer function
        console.log(innerVariable); // Accessing variable from inner function
    }

    innerFunction();
    // console.log(innerVariable); // Uncaught ReferenceError: innerVariable is not defined (innerVariable is not accessible in outerFunction)
}

outerFunction(); 
// Output:
// I am from the outer function.
// I am from the inner function.

if(true){
    const username = "krish"
    if(username === "krish"){   
const name = "krish kumar"
console.log(username + " " + name); // krish kumar
    }
    console.log(name);// Uncaught ReferenceError: name 
    // is not defined (name is not accessible outside the if block)
}
// console.log(username); // Uncaught ReferenceError: username is not defined (username is not accessible outside the if block)