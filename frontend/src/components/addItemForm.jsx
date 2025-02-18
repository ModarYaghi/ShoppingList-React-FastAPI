/**
 * AddItemForm Component
 *
 * This component renders a form that allows users to add a new item to the shopping list.
 * It uses React's useState hook to keep track of the input field's current value.
 * When the form is submitted, it prevents the default browser behavior, calls the provided
 * addItem function with the current item name, and then resets the input field.
 *
 * Props:
 *   - addItem (Function): A callback function to handle the addition of a new item.
 *
 * Usage:
 *   <AddItemForm addItem={handleAddItem} />
 */

import { useState } from "react";

// Define the AddItemForm component as a functional component that receives props.
const AddItemForm = ({ addItem }) => {
  // Declare a state variable 'itemName' to store the current value of the input field,
  // and 'setItemName' as its updater function. Initially, the input is empty ("").
  const [itemName, setItemName] = useState("");

  /**
   * handleSubmit - Event handler for form submission.
   *
   * This function is called when the form is submitted.
   * It prevents the default form submission behavior (which would reload the page),
   * checks if the input field is not empty, calls the addItem function with the current
   * item name, and finally resets the input field to an empty string.
   *
   * @param {Object} event - The event object representing the form submission.
   */
  const handleSubmit = (event) => {
    // Prevent the default behavior of form submission (page reload).
    event.preventDefault();

    // Check if there is a value in the input field.
    if (itemName) {
      // Call the addItem function passed as a prop with the current item name.
      addItem(itemName);
      // Reset the input field by setting itemName back to an empty string.
      setItemName("");
    }
  };

  // Render the form element, which includes:
  // - An input field for entering the item name.
  // - A submit button to add the item.
  // The form's onSubmit event is linked to the handleSubmit function.
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for item name.
          - The value of the input is controlled by the state variable 'itemName'.
          - onChange updates the state with the current input value.
          - The placeholder guides the user on what to enter. */}
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter Item name"
      />
      {/* Submit button to add the item.
          When clicked, it triggers the form submission event. */}
      <button type="submit">Add Item</button>
    </form>
  );
};

// Export the AddItemForm component so that it can be imported and used in other files.
export default AddItemForm;
