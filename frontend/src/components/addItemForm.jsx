import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName) {
      addItem(itemName);
      setItemName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter Item name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
