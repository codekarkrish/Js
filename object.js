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
