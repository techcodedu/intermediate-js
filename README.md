# intermediate-js
# CRUD Web Application Exercise

## Task

Build a web-based application to manage a list of users with basic CRUD (Create, Read, Update, Delete) functionality. The "database" for this application will be emulated using an array of user objects in JavaScript.

## Objective

The primary goal is to understand the principles of CRUD operations, user interface (UI) design using Bootstrap, and best practices in JavaScript.

## Features

### 1. Create (C)
   - Input fields to add a new user (name, age, email).
   - A button to submit the new user data.
   - After submission, the new user should be added to the list.

### 2. Read (R)
   - Display the list of users in a table.
   - Each row should show all details of a user (name, age, email).

### 3. Update (U)
   - Next to each user entry in the table, there should be an 'Edit' button.
   - Clicking the 'Edit' button should populate the input fields with the user's current data.
   - After making changes in the input fields and pressing a 'Save' or 'Update' button, the user's data in the list should be updated.

### 4. Delete (D)
   - Next to each user entry in the table, there should be a 'Delete' button.
   - Clicking the 'Delete' button should remove the user from the list.

## Best Practices

1. **Modularity:** Divide the JavaScript code into reusable functions for each CRUD operation.
2. **Data Integrity:** Ensure that the same user (determined by a unique identifier) is not added multiple times.
3. **User Feedback:** Provide feedback to the user upon successful addition, update, or deletion.
4. **UI/UX:** Use Bootstrap for styling and ensure the design is responsive.
5. **Error Handling:** Handle potential errors, such as trying to update or delete a user that doesn't exist.
