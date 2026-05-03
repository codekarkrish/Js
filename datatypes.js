let a=10 //integer
let b ="10" // string
let c = a+b
console.log(c);
// boolean => true/false
//undefined 
let d;
console.log(d);
//bigint

/* primative  and non primative
 7 types : string , number , boolean , null , undefined , symbol, bigint 

 // reference ( non primative )
  
 array , objects , functions 

*/


/* ******** Conversion *************** */
let n = 10
let m= "10"
console.log(typeof n);
console.log(typeof m);
let x = Number(m)
console.log(x);
let s = "10ans"
let t =Number(s)
console.log(typeof t);
//NaN
console.log(t);

// "33" =>33
// "32ads" =>NaN
// true => 1; false =>0

let e = 1
let f= Boolean(e)
console.log(f);

/*
1 => true
"krish" => true 
0 => false
*/

/******** Operations ********** */
/* + , - ,*, / , %  */
console.log(1 + "2"+2);
console.log(1+2+"2");
console.log("1"+ 2+2);


console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined ==0);//false
console.log(undefined >0);//false
console.log(undefined <0);//false


const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id ===anotherId) // false because symbol is unique and immutable


const ids = Symbol.for("123")
const anotherIds = Symbol.for("123")
    console.log(ids ===  anotherIds); // true 
    
