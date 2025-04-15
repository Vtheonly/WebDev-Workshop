
# Progress Bar with Animation Controls Project  

## Overview  

An interactive progress bar that demonstrates CSS animations, timing functions, and JavaScript animation control. This project teaches fundamental concepts of web animations and user interaction.  

## Learning Objectives  

- CSS animations and transitions  
- CSS custom properties  
- Event handling  

## Features  

### Animation Styles  

- **Linear** (constant speed)  
- **Ease-in** (slow start, fast end)  
- **Ease-out** (fast start, slow end)  
- **Ease-in-out** (slow-fast-slow)  

### Controls  

- Duration input  
- Start/Pause/Reset buttons  
- Animation style selector  
- Progress percentage display  
- Custom timing function editor  

## Common Challenges & Tips  

### 1. Animation Performance  

- Use `transform: translateX()` instead of modifying `width`.  
  - Modifying `width` forces a layout recalculation, slowing down animations.  
  - `transform` is handled by the GPU, making animations smoother.  

### 2. How `setTimeout` Works  

- `setTimeout(callback, delay)` schedules a function to run after a set time.  
- It does not guarantee exact timing, as execution depends on the event loop.  
- In animations, `setTimeout` can be used to update an element at fixed intervals.  

**Example:**  

```js
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
```

### 3. How `translateX` Works  

- `translateX(value)` moves an element horizontally by the specified amount.  
- It does not affect layout flow, making it more efficient than changing `width` or `left`.  
- For a progress bar, `translateX(100%)` moves it fully across its container.  

