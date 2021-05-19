import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);

  function handleDarkMode(){
    setDarkMode((darkMode)=> darkMode ? false : true)
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{darkMode ? "Dark" : "Light" } Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
