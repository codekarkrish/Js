// immediately invoked function expressions(IIFE)

(function chai () {
    console.log("DB CONNECTED 1");
})();   // ; is must for this type of function,
//  because it is an expression and not a declaration, 
// so it needs to be terminated with a semicolon.


// golbal scope problem solved by IIFE, 
// it creates a new scope for the variables and functions defined inside it,
//  so they do not pollute the global scope.

//arrow function IIFE
(()=>{
    console.log("DB CONNECTED 2");
})();

(function chiya(){
    console.log("DB CONNECTED 3");
})();

