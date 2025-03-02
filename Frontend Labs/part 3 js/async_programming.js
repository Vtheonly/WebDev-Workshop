// Async Programming Lab Exercises

// 1. Promises Basics
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

simplePromise.then(result => console.log(result));

// 2. Promise Chaining
const fetchUser = () => 
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John' });
        }, 1000);
    });

fetchUser()
    .then(user => user.id)
    .then(id => console.log(id));

// 3. Async/Await
async function getData() {
    try {
        const user = await fetchUser();
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

// 4. Promise.all
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = Promise.resolve('bar');

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values));

// 5. Promise.race
Promise.race([
    new Promise(resolve => setTimeout(() => resolve('fast'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('slow'), 2000))
]).then(result => console.log(result));

// 6. Fetch API
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// 7. Error Handling
async function errorHandlingExample() {
    try {
        await Promise.reject(new Error('Something went wrong'));
    } catch (error) {
        console.error('Caught:', error.message);
    }
}

// 8. Parallel vs Sequential Execution
async function sequential() {
    const result1 = await Promise.resolve('first');
    const result2 = await Promise.resolve('second');
    return [result1, result2];
}

async function parallel() {
    const [result1, result2] = await Promise.all([
        Promise.resolve('first'),
        Promise.resolve('second')
    ]);
    return [result1, result2];
}

// 9. Async Iteration
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

async function iterateAsync() {
    for await (const num of asyncGenerator()) {
        console.log(num);
    }
}

// 10. Real-world Example
class DataService {
    async fetchUserData(userId) {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('User not found');
        return response.json();
    }

    async updateUserData(userId, data) {
        const response = await fetch(`/api/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response.json();
    }
}

// Practice Exercises:
/*
1. Create a promise that resolves after a random delay
2. Build a function that retries a failed promise
3. Implement a timeout wrapper for promises
4. Create an async function that loads multiple resources in parallel
5. Build a promise-based cache system
6. Implement a sequential promise chain with dynamic data
7. Create an async iterator for pagination
8. Build a promise-based state machine
9. Implement a rate limiter for async operations
10. Create a promise pool for limiting concurrent operations
*/