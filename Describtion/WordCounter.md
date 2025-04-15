# Word Counter Project

## Overview

A real-time text analysis tool that provides instant feedback on text properties. This project teaches string manipulation, regular expressions, and dynamic DOM updates.

## Features

### Text Statistics

- Word count
- Character count (without spaces)

### Text Formatting

- Line spacing adjustment
- Word spacing adjustment
- Text alignment options
- Font size control
- Line height control

## Best Practices

*   **Small Functions:** Create functions for-specific tasks (e.g., `countWords()`, `countChars()`).
*   **Clear Variables:** Use descriptive names (e.g., `textArea` instead of `ta`).
*   **Limit Globals:** Define variables inside functions where possible.

## Useful JavaScript Functions

*   **`element.addEventListener('event', function)`**: Runs code when an event happens (like 'input' or 'click').
    ```javascript
    textArea.addEventListener('input', updateCounts);
    ```

*   **Real-time Updates:** To make your counts update *as the user types*, use the `'input'` event with `addEventListener` on your text area. Inside the function that runs for the 'input' event, call your counting functions (like `countWords()` and `countChars()`) and update the display on the page.

*   **`string.trim()`**: Removes spaces from the start/end of text.
    ```javascript
    let clean = "  text ".trim(); // "text"
    ```
*   **`string.split('separator')`**: Turns text into a list (array) based on the separator. Use `' '` for words.
    ```javascript
    let words = "one two".split(' '); // ["one", "two"]
    ```
*   **`Math.ceil(num)`**: Rounds number UP. `Math.ceil(2.1)` is `3`.
*   **`Math.floor(num)`**: Rounds number DOWN. `Math.floor(2.9)` is `2`.
*   **`Math.round(num)`**: Rounds to nearest whole number. `Math.round(2.5)` is `3`.
