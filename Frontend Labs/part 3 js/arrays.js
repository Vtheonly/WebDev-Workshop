// Arrays Lab Exercises

// 1. Basic Array Creation and Access
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// 2. Array Methods - Push and Pop
let numbers = [1, 2, 3];
numbers.push(4);        // Add element to end
console.log(numbers);   // [1, 2, 3, 4]
numbers.pop();          // Remove last element
console.log(numbers);   // [1, 2, 3]

// 3. Array Methods - Shift and Unshift
let colors = ['red', 'green'];
colors.unshift('blue'); // Add to beginning
console.log(colors);    // ['blue', 'red', 'green']
colors.shift();         // Remove from beginning
console.log(colors);    // ['red', 'green']

// 4. Array Splice Method
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');  // Insert at index 1
console.log(months);         // ['Jan', 'Feb', 'March', 'April', 'June']

// 5. Array Slice Method
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));     // ['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4));  // ['camel', 'duck']

// 6. Array Concatenation
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let combined = array1.concat(array2);
console.log(combined);  // ['a', 'b', 'c', 'd', 'e', 'f']

// 7. Array Iteration Methods
let numbers2 = [1, 2, 3, 4, 5];
// forEach
numbers2.forEach(num => console.log(num * 2));
// map
let doubled = numbers2.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// 8. Array Filter Method
let scores = [75, 50, 85, 90, 65, 95];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);  // [85, 90, 95]

// 9. Array Find and FindIndex
let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
let findCherries = inventory.find(item => item.name === 'cherries');
console.log(findCherries);  // {name: 'cherries', quantity: 5}

// 10. Array Reduce Method
let numbers3 = [1, 2, 3, 4, 5];
let sum = numbers3.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 15

// Practice Exercises:
/*
1. Create an array of your favorite foods and access the third item
2. Add two new colors to the beginning of an array of colors
3. Remove the last two elements from an array of numbers
4. Combine two arrays of your choice
5. Find all numbers greater than 10 in an array
6. Calculate the average of an array of test scores
7. Find the first element in an array that starts with the letter 'b'
8. Remove an element at a specific position in an array
9. Check if an array includes a specific element
10. Reverse an array without using the reverse method
*/