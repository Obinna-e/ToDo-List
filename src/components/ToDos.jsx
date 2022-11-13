import React, { useState } from "react";

function ListItems(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(!isDone);
  }
  return (
    <div>
      <ul>
        <li
          onClick={handleClick}
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {props.todos}
        </li>
      </ul>
    </div>
  );
}

export default ListItems;
