// Basic Functions

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Example usage
// console.log(add(2, 3)); // Output: 5

// Functions Lab Exercises

// 1. Basic Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice'));

// 2. Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));

// 3. Arrow Functions
const square = (num) => num * num;
console.log(square(5));

// 4. Functions with Default Parameters
const welcome = (name = 'Guest') => {
    return `Welcome, ${name}!`;
};
console.log(welcome());
console.log(welcome('John'));

// 5. Functions with Multiple Parameters
const calculateArea = (length, width) => {
    return length * width;
};
console.log(calculateArea(5, 3));

// 6. Function as Parameter (Callback)
function process(num, callback) {
    return callback(num);
}
console.log(process(4, square));

// 7. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This runs immediately!');
})();

// 8. Function with Rest Parameters
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4));

// 9. Function with Object Parameter
function printUserInfo({ name, age, city }) {
    console.log(`${name} is ${age} years old and lives in ${city}`);
}
printUserInfo({ name: 'Alice', age: 25, city: 'New York' });

// 10. Function Returning Multiple Values
function getMinMax(numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}
console.log(getMinMax([1, 5, 3, 9, 2]));

// Practice Exercises:
/*
1. Create a function that converts temperature from Celsius to Fahrenheit
2. Write an arrow function that checks if a number is even
3. Create a function that counts vowels in a string
4. Write a function that generates a random number between two values
5. Create a function that reverses a string
6. Write a function that finds the longest word in a sentence
7. Create a calculator function that takes an operator and two numbers
8. Write a function that checks if a year is a leap year
9. Create a function that formats a number as currency
10. Write a function that generates a random password
*/