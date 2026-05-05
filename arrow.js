// arrow  functions 

const  user = {
    username : "krish",
    price : 1000,

    welcomeMessage : function(){
        console.log(`welcome ${this.username} to our website`);//this keyword refers to the user object, so it will print "welcome krish to our website"
    console.log(this);
    
    }
}
user.welcomeMessage()
user.username = "krishan"
user.welcomeMessage()
console.log(this); // empty object in node js and window object in browser


// arrow function does not have its own this keyword, it inherits this from the parent scope. 
// in the above example, if we change welcomeMessage to an arrow function, it will not work as expected because it will inherit this from the global scope, which does not have a username property.

function wel(){
    let user = "heiaki"
    console.log(this.user); // undefined because this refers to the global scope, which does not have a user property
}
// arrow function
const welArrow = () => {
    let user = "heiaki"
    console.log(this);//{} empty object in node js and window object in browser
    
    console.log(this.user); // undefined because this refers to the global scope, which does not have a user property
}
wel()
welArrow()  


// another method of arrow 
const add = (a,b) => a+b  // if { } use return statement is required,
//  if not use return statement is not required
console.log(add(2,3)); // 5