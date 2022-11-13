import React, { useState } from "react";
import ListItems from "./ToDos";

function App() {


  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  function createNewItem(event) {
    setNewItem(event.target.value);
  }

  function addTodo() { 
    setToDos([...toDos, 
      newItem]);
    setNewItem("");
  }

  function createTodoList(todo) {
    return <ListItems 
      key={todo.uniqueId}
      todos={todo}
    />
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
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {toDos.map(createTodoList)}
      </div>
    </div>
  );
}

export default App;
