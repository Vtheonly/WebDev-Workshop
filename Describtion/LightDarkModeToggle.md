
# Light/Dark Mode Toggle Project  

## Overview  
A theme switcher that demonstrates `localStorage` usage and DOM manipulation. This project teaches fundamental concepts of state management and user preference persistence.  

## Learning Objectives  

- Managing application state  
- Using `localStorage` for persistence  
- Handling user preferences  
- CSS transitions for smooth theme changes  

## Features  
- Toggle button for theme switching  
- Animation for toggle button  
- Smooth transition between themes  
- Persistent theme selection using `localStorage`  

### Example: Using `localStorage`  

To store and retrieve the selected theme:  

```js
// Save theme to localStorage
localStorage.setItem("theme", "dark");

// Retrieve theme from localStorage
const theme = localStorage.getItem("theme");
if (theme) {
    document.body.classList.add(theme);
}
```

## State Management  
- Save theme preference immediately using `localStorage`  
- Handle page load flicker by applying the saved theme early  
- Respect system preferences  

## Bonus Features  
- Multiple theme support  
