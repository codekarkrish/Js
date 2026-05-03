/** array , objects , functions  */

const heros = ["krish " , "Ram", "shaktiman"]

let obj = {
    name : "krish",
    age : 21,
}

const myFun = function(){
    console.log("Hello krish");
}

console.log(typeof myFun);//function
console.log(typeof obj);//object
console.log(typeof heros);//object

/** stack ( primative ), heap (non- primative ) */

let a= 10
let b = a
b = 20

console.log(a);//10
console.log(b);//20   because of stack memory

let one = {
    email: "kri@mail.com",
    pin : "C12342"
}
let two = one  // 'two' is a reference to
//  the same object as 'one', not a copy   (heap memory is used for non-primitives)

two.pin ="B12342"

console.log(one.pin);
console.log(two.email);


// concatinations 

const name ="krish"
const repoCount = " 50"
// string concatination
console.log(name + repoCount);// old methods

console.log(`hello my name is ${name} and i have ${repoCount} repository`);

let nam = new String("krish")
console.log(nam); // String {"krish"}  this is an object not a primitive string
console.log(nam.__proto__);
console.log(nam.length);
console.log(nam.toUpperCase());
console.log(nam.indexOf('r'));
console.log(nam.replace('h','hna'));


let g = 9.8
console.log(g.toFixed(2)); // 9.80
console.log(g.toExponential(2)); // 9.80e+0
console.log(g.toPrecision(3)); // 9.80  
console.log(g.toString().length);
g = 10000
console.log(g.toLocaleString('en-IN')); // 10,000







