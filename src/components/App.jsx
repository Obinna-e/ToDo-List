import React, { useState } from "react";
import ListItems from "./ToDos";

function App() {

  const [newItem, setNewItem] = useState("");

  function createNewItem(event) {
    setNewItem(event.target.value);
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={createNewItem} type="text" 
          value={newItem}
        />
        <button>
          <span>Add</span>
        </button>
      </div>
      <ListItems/>
    </div>
  );
}

export default App;
