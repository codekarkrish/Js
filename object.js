// objects literals 

const user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    courses: ['html', 'css', 'js'],
    wife: null
};

console.log(user.name); // John
console.log(user.age); // 30
console.log(user.isAdmin); // true
console.log(user.courses); // ['html', 'css', 'js']
console.log(user.wife); // null

// we can also use square brackets to access properties
console.log(user['name']); // John

const mySymbol = Symbol('mySymbol');
const user2 = {
    name: 'Jane',
    [mySymbol]: 'This is a symbol property'
};

console.log(user2.name); // Jane
console.log(user2[mySymbol]); // This is a symbol property


/*** Singleton pattern */
const user3 = {
    fullname:{
    name: 'Bob'},
    age: 25
};

console.log(user3.fullname .name); // Bob
console.log(user3.age); // 25

console.log(user3);// { fullname: { name: 'Bob' }, age: 25 }
console.log(Object.keys(user3));// [ 'fullname', 'age' ]
console.log(Object.values(user3));// [ { name: 'Bob' }, 25 ]
console.log(Object.entries(user3));// [ [ 'fullname', { name: 'Bob' } ], [ 'age', 25 ] ]    

console.log(user3.hasOwnProperty("isLoggedIn"));// false



const course = {
    courseName: 'JavaScript',
    duration: '3 months',
    instructor: 'John Doe'
};
console.log(course.duration);// 3 months

// course.courseName = 'Python'; // we can change the value of a property
//destructuring assignment
const { courseName, duration, instructor } = course; // destructuring assignment
console.log(courseName);

//json 
// {  "string": "Any thing no. , boolean, array, object",
//     "name": "Alice",
//     "age": 28,
//     "isStudent": false,
//     "courses": ["math", "physics", "chemistry"],
//     "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "country": "USA"
//     }
// }
