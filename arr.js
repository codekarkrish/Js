const arr1 = [1, 2, 3];
const arr2 = ["krish", "ram", "shaktiman"];
console.log(arr1[3]);//undefined 
console.log(arr2[0]);//krish
arr1.unshift(9);// adds element at the beginning of the array
console.log(arr1);
console.log(arr1.indexOf(9));

// slice and splice
const arr = arr1.slice(0, 2);// it does not change the original array
console.log(arr);
arr1.splice(0, 2, 5, 6);// it changes the original array
console.log(arr1);


let arrs = [1,2,[3,4,[5,6]]]
console.log(arrs[2][2][0]);//5

console.log(Array.isArray("krish"));

const a =232
const b = 21
const c = 213
console.log(Array.of(a,b,c));

