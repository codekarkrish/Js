// callbacks are functions that are passed as arguments to other functions and are executed after some operation is completed. 
// They are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API 
// or reading a file.

// Example of a callback function

function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log('Data received:', data);
}

// Fetch data and display it using the callback function
fetchData(displayData); 

//output after 2 seconds: Data received: { name: 'John', age: 30 }

// In this example, the fetchData function simulates an asynchronous operation using setTimeout. 
// After 2 seconds, it calls the callback function (displayData) with the fetched data as an argument. 
// The displayData function then logs the received data to the console.


// Example of a callback function with an error handling

function fetchDataWithError(callback) {
    setTimeout(() => {
        const error = null; // Simulating no error
        const data = { name: 'Jane', age: 25 };
        callback(error, data);
    }, 2000);
}

function displayDataWithErrorHandling(error, data) {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data received:', data);
    }
}   
// Fetch data and display it using the callback function with error handling
fetchDataWithError(displayDataWithErrorHandling);

//output after 2 seconds: Data received: { name: 'Jane', age: 25 }

// In this example, the fetchDataWithError function simulates an asynchronous operation and includes error handling. 
// The callback function (displayDataWithErrorHandling) checks if there is an error and logs it to the console. 
// If there is no error, it logs the received data.

// Callbacks are essential for managing asynchronous operations in JavaScript and help ensure that code executes in the correct order,
//  especially when dealing with tasks that take time to complete.