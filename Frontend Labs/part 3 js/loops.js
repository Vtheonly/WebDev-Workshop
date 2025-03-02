// Loops Lab Exercises

// 1. Basic For Loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// 2. While Loop
let count = 0;
while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}

// 3. Do-While Loop
let num = 1;
do {
    console.log(`Number is ${num}`);
    num++;
} while (num <= 5);

// 4. For...of Loop with Arrays
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}

// 5. For...in Loop with Objects
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 6. Nested Loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 7. Loop with Break Statement
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// 8. Loop with Continue Statement
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}

// 9. Array forEach Loop
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
    console.log(`Number ${number} at index ${index}`);
});

// 10. Loop with Array Methods
const words = ['hello', 'world', 'javascript'];
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);

// Practice Exercises:
/*
1. Create a loop that counts down from 10 to 1
2. Write a loop that sums all numbers from 1 to 100
3. Create a loop that prints even numbers from 0 to 20
4. Write a loop that creates a multiplication table
5. Create a loop that finds the factorial of a number
6. Write a loop that searches for a specific element in an array
7. Create a loop that removes specific elements from an array
8. Write a loop that checks if all array elements meet a condition
9. Create a loop that builds a pattern (like a pyramid)
10. Write a loop that simulates a simple game loop
*/