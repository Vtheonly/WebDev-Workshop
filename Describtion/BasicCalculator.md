# Basic Calculator Project  

## Overview  
A simple and interactive calculator that performs basic arithmetic operations. This project helps beginners understand DOM manipulation, event handling, and basic JavaScript functions.  

## Learning Objectives  

- Understanding HTML form inputs and buttons  
- Working with JavaScript functions and arithmetic operations  
- Handling user input and displaying results  
- Basic error handling (division by zero, invalid inputs)  

## Features  

- Basic arithmetic operations:  
  - Addition (+)  
  - Subtraction (-)  
  - Multiplication (*)  
  - Division (/)  
- Clear button to reset inputs  
- Error handling for invalid operations  

## Implementation Guide  

### HTML Structure  

- Create a simple calculator layout.  
- Include a **display screen** and buttons for numbers and operations.  

### CSS Styling  

- Set appropriate `width`, `height`, and `margin` for elements.  
- Add **hover effects** to buttons for better UI.  
- Ensure the display screen is formatted for readability.  

### JavaScript Implementation  

#### **Core Functionalities**  

- Store numbers and operations separately.  
- Use a **global variable** to store results for further calculations.  
- Handle **decimal points** properly.  
- Prevent **multiple operators** from being entered consecutively.  

#### **Common Issues & Fixes**  

1. **Handling Consecutive Operations**  
   - Ensure that when an operation is selected, the next number input should replace the display instead of appending.  

2. **Division by Zero**  
   - Add a condition to prevent errors when dividing by zero.  

3. **Floating Point Precision Issues**  
   - Be mindful of floating point inaccuracies in JavaScript. (e.g., `0.1 + 0.2 !== 0.3`)  

4. **Clearing Display vs Resetting State**  
   - Differentiate between clearing the display (`C` button) and resetting everything.  