// DOM Manipulation Lab Exercises

// 1. Basic Element Selection
const heading = document.getElementById('main-heading');
const paragraphs = document.getElementsByTagName('p');
const buttons = document.getElementsByClassName('btn');
const firstElement = document.querySelector('.item');
const allElements = document.querySelectorAll('.item');

// 2. Creating Elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New Element';
document.body.appendChild(newDiv);

// 3. Modifying Element Content
const textElement = document.querySelector('.text');
textElement.textContent = 'Updated Text';
textElement.innerHTML = '<span>HTML Content</span>';

// 4. Styling Elements
const element = document.querySelector('.styled');
element.style.backgroundColor = 'blue';
element.style.color = 'white';
element.style.padding = '10px';

// 5. Working with Classes
const box = document.querySelector('.box');
box.classList.add('active');
box.classList.remove('inactive');
box.classList.toggle('visible');
box.classList.contains('active');

// 6. Handling Attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.getAttribute('href');
link.removeAttribute('target');

// 7. Event Handling
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    event.preventDefault();
});

// 8. DOM Traversal
const parent = document.querySelector('.parent');
const children = parent.children;
const firstChild = parent.firstElementChild;
const nextSibling = parent.nextElementSibling;

// 9. Form Manipulation
const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(input.value);
});

// 10. Dynamic Content Loading
function loadContent() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            container.innerHTML = data.content;
        });
}

// Practice Exercises:
/*
1. Create a toggle button that shows/hides an element
2. Build a simple todo list with add/remove functionality
3. Create a form that validates input before submission
4. Build a color picker that changes background color
5. Create an image gallery with next/previous buttons
6. Build a counter with increment/decrement buttons
7. Create a dynamic table with add/remove row functionality
8. Build a simple accordion/collapse component
9. Create a character counter for a textarea
10. Build a simple modal/popup system
*/

// HTML Template for exercises (add to your HTML file):
/*
<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation Labs</title>
</head>
<body>
    <h1 id="main-heading">DOM Manipulation</h1>
    <div class="container">
        <p class="text">Sample text</p>
        <button class="btn">Click me</button>
        <div class="box">Box element</div>
        <form>
            <input type="text" placeholder="Enter text">
            <button type="submit">Submit</button>
        </form>
    </div>
    <script src="dom_manipulation.js"></script>
</body>
</html>
*/