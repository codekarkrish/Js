//control flow is the order in which the computer executes statements in a program.
//In JavaScript, there are several control flow statements that allow you to control the flow of your program. These include:

// <,>,<=,>=,==,===,!=,!== are comparison operators that are used to compare values.
//  They return a boolean value (true or false) based on the comparison.

//1. if statement: The if statement is used to execute a block of code if a specified condition is true.

if(2 == "2"){
    console.log("This is true");
}
//2. else statement: The else statement is used to execute a block of code if the condition in the if statement is false.

if(2 === "2"){
    console.log("This is true");
}else{
    console.log("This is false");
}

//3. else if statement: The else if statement is used to specify a new condition to test if the first condition is false.

if(2 === "2"){
    console.log("This is true");
}else if(2 == "2"){
    console.log("This is also true");
}else{
    console.log("This is false");
}

//4. switch statement: The switch statement is used to perform different actions based on different conditions.

let day = "Monday";

switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}

//5. for loop: The for loop is used to repeat a block of code a specified number of times.          
for(let i = 0; i < 5; i++){
    console.log(i);
}

//6. while loop: The while loop is used to repeat a block of code as long as a specified condition is true.

let j = 0;
while(j < 5){
    console.log(j);
    j++;
}

//7. do...while loop: The do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.

let k = 0;
do{
    console.log(k);
    k++;
}while(k < 5);

//8. for...in loop: The for...in loop is used to iterate over the properties of an object.

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for(let key in person){
    console.log(key + ": " + person[key]);
}
//scope is the area of a program where a variable or function is accessible. In JavaScript, there are three types of scope: global scope, function scope, and block scope.

//global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the program.

let score = 101;

if(score>100){
    var power = "fly"
    console.log(`User power: ${power}`);
    
}
console.log(`User power: ${power}`); // power is accessible here because var is function scoped, not block scoped.

// var(global scope), let and const ( block scope)


if(score>100)console.log("test1 "),console.log("test2"); // this is also valid syntax, but it is not recommended to use it, because it can lead to confusion and errors. It is better to use curly braces to clearly define the block of code that should be executed if the condition is true.

const UserLoggedIn = true;
const debitCard = true;

if(UserLoggedIn && debitCard){
    console.log("You can buy the product");
}else if(UserLoggedIn && !debitCard){
    console.log("You cannot buy the product");
}
else{
    console.log("You are not logged in");
}

// truthy values
//"0","false"," ",[],{},function(){},true are all truthy values in JavaScript, 
// which means they will evaluate to true in a boolean context.

// falsy values
// 0,"",null,undefined,NaN,false are all falsy values in JavaScript, 
// which means they will evaluate to false in a boolean context.

// check object is empty or not
let obj = {
    a : 1,
    b : 2,
    c : 3
};

if(Object.keys(obj).length === 0){// Object.keys(object_name) method returns an array of a given object's own enumerable property names,
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}

//nulllish coalescing operator(??) is a logical operator that returns the right-hand side operand when the 
// left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

//let userName = null;
let  userName = " krish";
let defaultName = "Guest";

let nameToDisplay = userName ?? defaultName; // if userName is null or undefined, it will return defaultName
console.log(nameToDisplay);

let userName2 = " ";
let nameToDisplay2 = userName2 ?? defaultName ?? "Anonymous"; // if userName is falsy, it will return defaultName
// anonymous will never be returned because defaultName is truthy, so it will be returned instead of anonymous.
console.log(nameToDisplay2);


// terniary operator is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is a shorthand for an if...else statement.

let age = 18;
let canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote);

for(let index = 0; index < 5; index++){
    if(index === 2) {
        console.log(`detected 2`);
        continue; // continue statement is used to skip the current iteration of a loop and move to the next iteration
    }
    console.log(index);
}

//[{},{},{}]

const arr = [1,2,3,4,5];

for(const num of arr){ // for...of loop is used to iterate over the values of an iterable object, such as an array or a string.
    console.log(`num: ${num}`);
}