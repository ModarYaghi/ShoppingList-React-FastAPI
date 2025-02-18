/**
 * ShoppingList Component
 *
 * This component is responsible for fetching and displaying a list of shopping items,
 * as well as providing functionality to add a new item to the list. It communicates
 * with the backend API to retrieve the current list and to add new items.
 *
 * Functionality:
 *  - Fetches the shopping list from the API endpoint "/shopping_list" when the component mounts.
 *  - Displays the list of items in an unordered list.
 *  - Provides a form (via the AddItemForm component) to add a new item.
 *  - Sends a POST request to the API endpoint "/item" to add a new item, then refreshes the list.
 *
 * Hooks Used:
 *  - useState: Manages the state for the shopping list items.
 *  - useEffect: Triggers the initial fetch of shopping list items when the component mounts.
 *
 * Dependencies:
 *  - api: An Axios instance configured to communicate with the backend API.
 *  - AddItemForm: A component that renders a form for adding a new item.
 */

import { useEffect, useState } from "react";
import api from "../api.js";
import AddItemForm from "./addItemForm";

const ShoppingList = () => {
  // State variable to hold the array of shopping items.
  // 'setItems' is used to update the list when new items are fetched or added.
  const [items, setItems] = useState([]);

  /**
   * fetchItems
   *
   * An asynchronous function that fetches the shopping list from the backend.
   * It sends a GET request to the "/shopping_list" endpoint.
   * If the request is successful, it updates the 'items' state with the received data.
   * If there is an error, it logs the error message to the console.
   */
  const fetchItems = async () => {
    try {
      // Send a GET request to the backend API to retrieve the shopping list.
      const response = await api.get("/shopping_list");
      // Update the state with the retrieved shopping list.
      setItems(response.data.shopping_list);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  /**
   * addItem
   *
   * An asynchronous function that adds a new item to the shopping list.
   * It sends a POST request to the "/item" endpoint with the new item's name in JSON format.
   * After successfully adding the item, it calls fetchItems() to refresh the list.
   *
   * @param {string} itemName - The name of the new item to add.
   */
  const addItem = async (itemName) => {
    try {
      // Send a POST request to the backend API with the new item's name.
      await api.post("/item", { name: itemName });
      // Refresh the shopping list by fetching the updated data.
      fetchItems();
    } catch (error) {
      console.error("Error adding item", error);
    }
  };

  // useEffect hook to fetch the shopping list when the component mounts.
  // The empty dependency array ensures this effect runs only once.
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {/* Heading for the shopping list */}
      <h2>Shopping List</h2>
      {/* Render the list of items using the map function */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {/* Render the AddItemForm component and pass the addItem function as a prop */}
      <AddItemForm addItem={addItem} />
    </div>
  );
};

export default ShoppingList;
