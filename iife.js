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

//js execution context is created for each function call,
// so when the IIFE is invoked, a new execution context is created for it,
// and the code inside the IIFE is executed in that context. 
// Once the IIFE finishes executing, its execution context is destroyed, 
// and any variables or functions defined inside it are no longer accessible.   

//global execution context is created when the script is loaded, 
// and it remains active until the script finishes executing.

//function execution context is created when a function is called,

//eval execution context is created when the eval function is called,