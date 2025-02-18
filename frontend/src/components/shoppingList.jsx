import React, { useEffect, useState } from "react";
import api from "../api.js";
import AddItemForm from "./addItemForm";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await api.get("/shopping_list");
      setItems(response.data.shopping_list);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  const addItem = async (itemName) => {
    try {
      await api.post("/item", { name: itemName });
      fetchItems();
    } catch (error) {
      console.error("Error adding item", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <AddItemForm addItem={addItem} />
    </div>
  );
};

export default ShoppingList;
