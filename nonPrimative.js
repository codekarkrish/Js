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


