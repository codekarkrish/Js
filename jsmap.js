//map in js
// map is a collection of key-value pairs where each key is unique. 
// It allows you to store and retrieve values based on their keys. 
// Maps are similar to objects, but they provide additional features such as maintaining the order of entries 
// and allowing any type of key (including objects).
// Creating a new Map
let myMap = new Map();

// Adding key-value pairs using set()
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Getting values using get()
console.log(myMap.get('name')); // John
console.log(myMap.get('age'));  // 30
console.log(myMap.get('city')); // New York

// Loop through the map
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// Checking if key exists
console.log(myMap.has('name')); // true

// Size of map
console.log(myMap.size); // 3

// Delete a key
myMap.delete('age');

console.log(myMap);

// Loop again after delete
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}


const myobject = { id: 1, name: 'Object Key' };

for (const key in myobject) {
    console.log(`${key} is ${myobject[key]}`);
}

const coding =["js", "python", "java", "c++"];

coding.forEach(function (val){
    console.log(val);
} )


// map() is a higher-order function that creates a new array by applying a provided function to each element of the original array.
let nums = [1, 2, 3, 4];

let doubled = nums.map((num) => {
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

//filter() is a higher-order function that creates a new array with all elements that pass a test implemented by the provided function.
let evenNumbers = nums.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

//reduce() is a higher-order function that applies a reducer function to each element of the array, resulting in a single output value.
let sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 10

const shoppingCart = [
    { item: 'Laptop', price: 1000 },
    { item: 'Phone', price: 500 },
    { item: 'Headphones', price: 200 }
];

let totalPrice = shoppingCart.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(totalPrice); // 1700