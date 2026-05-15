//promises is a way to handle asynchronous operations in JavaScript. 
// It allows you to write cleaner and more readable code when dealing with asynchronous tasks, 
// such as fetching data from an API or reading files.

// Example of a promise

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            const data = { name: 'John', age: 30 };
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

//output after 2 seconds: Data received: { name: 'John', age: 30 }

// In this example, the fetchData function returns a promise that simulates an asynchronous operation using setTimeout. 
// After 2 seconds, it resolves the promise with the fetched data. 
// The then method is used to handle the resolved value, while the catch method is used to handle any potential errors.

// Promises provide a more structured way to handle asynchronous operations and can help avoid callback hell, 
// which occurs when you have multiple nested callbacks.

// Example of chaining promises 
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = null; // Simulating no error
            const data = { name: 'Jane', age: 25 };
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }, 2000);
    });
}

fetchDataWithError()
    .then(data => {
        console.log('Data received:', data);
        return data.name; // Chaining another promise
    })
    .then(name => {
        console.log('Name received:', name);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

//output after 2 seconds: 
// Data received: { name: 'Jane', age: 25 }
// Name received: Jane

// In this example, the fetchDataWithError function simulates an asynchronous operation with error handling. 
// The first then method handles the resolved data and returns the name property, which is then handled by the second then method. 
// If there is an error at any point in the promise chain, it will be caught by the catch method.   

