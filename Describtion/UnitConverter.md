# Unit Converter Project

## Overview
A comprehensive unit conversion tool that handles multiple conversion types. This project teaches number handling, input validation, and working with formulas in JavaScript.

## Learning Objectives
- Number manipulation in JavaScript
- Input validation (checking for valid numbers)
- Working with formulas

## Features
### Currency Converter
- USD ↔ DZD
- EUR ↔ DZD
  *(Tip: Use an object to store conversion rates)*

### Temperature Converter
- Celsius ↔ Fahrenheit
- Celsius ↔ Kelvin
- Fahrenheit ↔ Kelvin
  *(Tip: Use functions for each formula)*

### Measurement Converter
- Length (Meters ↔ Feet, etc.)
- Weight (Kilograms ↔ Pounds)
- Volume (Liters ↔ Gallons)
  *(Tip: Group related conversions)*


## Common Challenges & Tips
1.  **Number Precision**
    - Use `toFixed()` to control how many decimal places are shown.

2.  **User Experience**
    - **Real-time Updates:** Use the `input` event on number fields to recalculate immediately.
    - **Clear Display:** Show the units (e.g., '°C', 'kg') next to the numbers.

## Best Practices
*   **Specific Functions:** Create functions for each conversion type (e.g., `celsiusToFahrenheit(c)`, `usdToDzd(usd)`).
*   **Validate Input:** Check if the user entered a valid number before calculating. Use `isNaN()`.
*   **Clear Variables:** Use names like `inputValue`, `conversionRate`, `result`.
*   **Error Messages:** Tell the user if their input is invalid (e.g., "Please enter a valid number").
*   **Data Structures:** Use objects (`{}`) to store conversion rates or formulas logically.

## Useful JavaScript Functions

*   **`element.addEventListener('input', function)`**: Runs code when a number input changes.
    ```javascript
    inputField.addEventListener('input', convertUnits);
    ```
*   **`parseFloat(string)` / `Number(string)`**: Converts text input into a number.
    ```javascript
    let numValue = parseFloat(inputField.value);
    ```
*   **`isNaN(value)`**: Checks if a value is Not-a-Number. Useful for validation.
    ```javascript
    if (isNaN(numValue)) { alert("Invalid number!"); }
    ```
*   **Arithmetic (`+ - * /`)**: Basic math for applying conversion formulas.
    ```javascript
    let fahrenheit = (celsius * 9/5) + 32;
    ```
*   **`number.toFixed(digits)`**: Formats a number to have a specific number of decimal places (returns a string).
    ```javascript
    let displayResult = result.toFixed(2); // e.g., 123.45
    ```
*   **Objects (`{}`)**: Store related data like conversion rates.
    *Example for Currency Rates:*
    ```javascript
    // Store rates in an object
    const exchangeRates = {
      'USD_TO_DZD': 135.50,
      'EUR_TO_DZD': 145.20,
      // Add more rates here...
      'DZD_TO_USD': 1 / 135.50 // For reverse conversion
    };

    let amountInUSD = 10;
    let amountInDZD = amountInUSD * exchangeRates['USD_TO_DZD'];
    console.log(amountInDZD.toFixed(2)); // Output: 1355.00
    ```

## Bonus Features (optional but you learn a lot)
- Reverse conversion button
- Multiple values at once
- Custom unit definitions
- Clear input buttons
- Copy result button





