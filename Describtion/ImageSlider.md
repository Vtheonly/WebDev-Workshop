

# Image Slider Project  

## Overview  
An interactive image carousel that demonstrates DOM manipulation, CSS transitions, and JavaScript event handling. Perfect for learning how to create smooth animations and handle user interactions.  

## Learning Objectives  

- Working with DOM elements dynamically  
- Implementing CSS transitions  
- Handling user interactions  

## Features  
- Next/Previous navigation buttons  
- Smooth slide transitions  

### HTML Structure  
- Main container with fixed width/height  
- Image container for slides  
- Navigation buttons  
- Slide indicators/dots  

### CSS Requirements  

#### Explanation of `transform`  

```css
.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
}

.container {
  overflow: hidden;
}
```

The `transform: translateX(-100%)` shifts the image container to the left, creating the sliding effect. The transition property ensures a smooth movement.  

### JavaScript Components  

#### Core Functionality  

- Slide transition logic  
- Navigation controls  
- Event listeners  

```javascript
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function updateSlider() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
```

> **Tip:** `currentIndex * containerWidth` determines how much the slider moves for each transition.

### Keyboard Navigation  

To allow users to navigate using the left and right arrow keys, bind event listeners to `keydown`:  

```javascript
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') nextSlide();
  if (event.key === 'ArrowLeft') previousSlide();
});
```

## Common Challenges & Tips  

- Test with different image sizes  
- Verify smooth transitions  

### Responsive Design  

- Handle different image sizes  
- Maintain aspect ratios  
- Adapt for mobile devices  

## Bonus Features  

- Keyboard navigation (left/right arrows)  
- Progress indicator  
- Fade transition option  
- Caption support for images  

