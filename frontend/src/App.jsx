// Import the React library to enable JSX and component functionality.
import React from "react";

// Import the main CSS file for global styles.
import "./App.css";

// Import the ShoppingList component that displays and manages the shopping list.
import ShoppingList from "./components/shoppingList";

// Define the main App component that structures the overall layout of the application.
const App = () => {
  return (
    // The root container for the app.
    <div className="App">
      {/* Header section containing the application title */}
      <header className="App-header">
        <h1>Shopping List App</h1>
      </header>
      {/* Main section where the ShoppingList component is rendered */}
      <main>
        <ShoppingList />
      </main>
    </div>
  );
};

// Export the App component as the default export so it can be used by index.js.
export default App;
