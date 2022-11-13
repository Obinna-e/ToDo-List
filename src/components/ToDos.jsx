import React from "react";



function ListItems(props) {
    
    return <div>
    <ul>
    <li >{
        props.todos
    }</li>
  </ul>
  </div>
}

export default ListItems