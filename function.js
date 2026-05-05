//function 
function add(a,b){
    return a+b;
    console.log("krish");// this line will never be executed 
    // because it is after the return statement
    
}
console.log(add(2,3)); // 5

function greet(name){
    return `Hello, ${name}!`;
}
console.log(greet('Alice'));   // Hello, Alice!

function login(User){
    if(User === 'admin'){
        return 'Welcome, admin!';
    }
    if(User === "Undefined"){
        return 'User is undefined';
    }          
    return `Welcome, ${User}!`;
}
console.log(login('Bob')); // Welcome, Bob!
console.log(login('admin')); // Welcome, admin! 
console.log(login(undefined)); // User is undefined


// cart total price calculation
function calculateCartPrice(...cart){
    let totalPrice = 0;
    for(let item of cart){
        totalPrice += item.price * item.quantity;
    }
    return totalPrice;
}
const cart = [
    { name: 'Laptop', price: 1000, quantity: 1 },
    { name: 'Phone', price: 500, quantity: 2 },
    { name: 'Headphones', price: 100, quantity: 3 }
];
console.log(calculateCartPrice(...cart)); // 2300