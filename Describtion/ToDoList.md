# Todo List Project

## Overview
An interactive task management application built with JavaScript. This project focuses on manipulating the web page directly (DOM manipulation) and responding to user actions (event handling).

**Note:** This version does *not* save your tasks. If you refresh the page, the list will reset. Saving data is outside the scope of this basic project.

## Learning Objectives
- DOM manipulation (creating, adding, removing HTML elements)
- Event handling (reacting to clicks, typing)
- Using basic JavaScript logic to manage a list

## Features
- **Add New Tasks:** Input field to type a task and a button to add it to the list.
- **Task Display:** Each task should appear as a list item (`<li>`).
- **Mark as Complete:** A way to toggle the completion status of a task (e.g., using a checkbox or button, visually indicated by a line-through or different style).
- **Delete Tasks:** A button next to each task to remove it from the list.
- **Task Highlighting (Optional):** Add colored tags/indicators (e.g., orange, red, green) to tasks. This can be done by adding specific CSS classes to the task elements.
- **Search/Filter:** An input field to type text, hiding tasks that don't match the typed text.

## Implementation Tips

*   **Structure:** Use an unordered list (`<ul>`) to hold your task items (`<li>`). Each `<li>` might contain:
    *   The task text (e.g., in a `<span>`).
    *   A "Complete" button or checkbox.
    *   A "Delete" button.
    *   (Optional) A color indicator element.
*   **Adding Tasks:** When the "Add" button is clicked, read the text from the input field, create a new `<li>` element with the necessary content and buttons, and append it to the `<ul>`.
*   **Deleting Tasks:** Add an event listener to the "Delete" button. When clicked, remove its parent `<li>` element.
*   **Completing Tasks:** Add an event listener to the "Complete" button/checkbox. When clicked, toggle a CSS class (e.g., `.completed`) on the parent `<li>` element. Style this class in your CSS (e.g., `text-decoration: line-through;`).
*   **Search/Filtering:** Add an event listener (using the `input` event) to the search field. Inside the function:
    *   Get the search text.
    *   Loop through all task items (`<li>`).
    *   If a task's text includes the search text, make sure it's visible.
    *   If it doesn't, hide it (e.g., by adding a `.hidden` class with `display: none;` in CSS).

## Common Challenges & Tips
1.  **Event Delegation:** Instead of adding a listener to every delete/complete button, consider adding one listener to the parent `<ul>` and checking which button was clicked inside the event handler. (This is slightly more advanced but more efficient).
2.  **User Experience:**
    *   **Deletion Confirmation:** Use `confirm()` before deleting a task to prevent accidental removal.
    *   **Clear Input:** Clear the task input field after a task is added.

## Best Practices
*   **Small Functions:** Create functions for specific actions (e.g., `addTask()`, `deleteTask(event)`, `toggleComplete(event)`, `filterTasks()`).
*   **Clear Naming:** Use descriptive names for variables and functions (e.g., `taskInput`, `taskList`, `newTaskElement`).
*   **Validate Input:** Don't add empty tasks. Check if the input field has text before creating a task element.

## Useful JavaScript Functions

*   **`document.createElement('tagName')`**: Creates a new HTML element.
    ```javascript
    let newItem = document.createElement('li');
    let deleteBtn = document.createElement('button');
    ```
*   **`element.appendChild(childElement)`**: Adds an element inside another element.
    ```javascript
    newItem.appendChild(deleteBtn); // Put button inside li
    taskList.appendChild(newItem); // Put li inside ul
    ```
*   **`element.innerText = 'text'` / `element.textContent = 'text'`**: Sets the text content of an element.
    ```javascript
    newItem.textContent = taskInput.value; // Set li text
    ```
*   **`element.addEventListener('eventType', function)`**: Listens for user actions.
    ```javascript
    addBtn.addEventListener('click', addTask);
    deleteBtn.addEventListener('click', deleteTask);
    searchInput.addEventListener('input', filterTasks);
    ```
*   **`element.value`**: Gets the current text from an input field.
    ```javascript
    let taskText = taskInput.value;
    ```
*   **`element.remove()`**: Deletes an element from the page.
    ```javascript
    listItemToRemove.remove();
    ```
*   **`element.classList.add('className')` / `remove()` / `toggle()`**: Manages CSS classes on an element. Useful for completion status and filtering.
    ```javascript
    listItem.classList.toggle('completed'); // Mark as done/undone
    listItem.classList.add('hidden'); // Hide for search
    listItem.classList.remove('hidden'); // Show for search
    ```
*   **`confirm('message')`**: Shows a confirmation dialog (OK/Cancel). Returns `true` if OK is clicked, `false` otherwise.
    ```javascript
    // Inside deleteTask function, before removing:
    if (confirm("Are you sure you want to delete this task?")) {
      taskElement.remove(); // Only remove if user clicks OK
    }