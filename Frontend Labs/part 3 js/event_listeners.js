// Event Listeners

// Function to add a click event listener to an element
function addClickListener(id, callback) {
    var element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', callback);
    }
}

// Example usage
// addClickListener('myButton', function() {
//     alert('Button clicked!');
// });

// Event Listeners Lab Exercises

// 1. Click Events
document.querySelector('#clickButton').addEventListener('click', (event) => {
    console.log('Button clicked!');
    event.target.style.backgroundColor = 'red';
});

// 2. Mouse Events
const mouseArea = document.querySelector('.mouse-area');
mouseArea.addEventListener('mouseenter', () => {
    console.log('Mouse entered!');
});
mouseArea.addEventListener('mouseleave', () => {
    console.log('Mouse left!');
});
mouseArea.addEventListener('mousemove', (event) => {
    console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
});

// 3. Keyboard Events
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});
document.addEventListener('keyup', (event) => {
    console.log(`Key released: ${event.key}`);
});

// 4. Form Events
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted!');
});

// 5. Input Events
const textInput = document.querySelector('#textInput');
textInput.addEventListener('input', (event) => {
    console.log(`Input value: ${event.target.value}`);
});
textInput.addEventListener('focus', () => {
    console.log('Input focused');
});
textInput.addEventListener('blur', () => {
    console.log('Input lost focus');
});

// 6. Window Events
window.addEventListener('load', () => {
    console.log('Page fully loaded!');
});
window.addEventListener('resize', () => {
    console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
});
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollY}px`);
});

// 7. Custom Events
const customEvent = new CustomEvent('customAction', {
    detail: { message: 'Custom event triggered!' }
});
document.addEventListener('customAction', (event) => {
    console.log(event.detail.message);
});

// 8. Event Delegation
document.querySelector('.list').addEventListener('click', (event) => {
    if (event.target.matches('li')) {
        console.log(`List item clicked: ${event.target.textContent}`);
    }
});

// 9. Drag and Drop Events
const draggable = document.querySelector('.draggable');
draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});
const dropZone = document.querySelector('.drop-zone');
dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const element = document.getElementById(data);
    dropZone.appendChild(element);
});

// 10. Media Events
const video = document.querySelector('video');
video.addEventListener('play', () => {
    console.log('Video started playing');
});
video.addEventListener('pause', () => {
    console.log('Video paused');
});

// Practice Exercises:
/*
1. Create a button that changes color on different mouse events
2. Build a keypress game that responds to specific keys
3. Create a form with real-time validation feedback
4. Build a draggable element that snaps to a grid
5. Create an infinite scroll implementation
6. Build a typing speed test with keyboard events
7. Create a drawing canvas with mouse events
8. Build a custom right-click context menu
9. Create a zoom effect on image hover
10. Build a custom video player with media events
*/

// HTML Template for exercises (add to your HTML file):
/*
<!DOCTYPE html>
<html>
<head>
    <title>Event Listeners Labs</title>
</head>
<body>
    <button id="clickButton">Click Me</button>
    <div class="mouse-area">Mouse Area</div>
    <form>
        <input type="text" id="textInput">
        <button type="submit">Submit</button>
    </form>
    <ul class="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <div class="draggable" draggable="true">Drag me</div>
    <div class="drop-zone">Drop Zone</div>
    <video src="sample.mp4" controls></video>
    <script src="event_listeners.js"></script>
</body>
</html>
*/