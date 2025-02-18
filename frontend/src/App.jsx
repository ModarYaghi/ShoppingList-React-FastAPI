import React from "react";
import "./App.css";
import ShoppingList from "./components/shoppingList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List App</h1>
      </header>
      <main>
        <ShoppingList />
      </main>
    </div>
  );
};

export default App;
