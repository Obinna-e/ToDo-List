import React from "react";

function handleClick(event) {
    if (event.target.style.textDecoration) {
        event.target.style.removeProperty('text-decoration');
    } else {
        event.target.style.setProperty('text-decoration', 'line-through');
    }
}

function ListItems(props) { 
    return <div>
    <ul>
    <li onClick={handleClick}>{
        props.todos
    }</li>
  </ul>
  </div>
}

export default ListItems