import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ButtonAppBar } from "./Navbar";
import { FormControl } from "@material-ui/core";
import { AddTodo } from "./AddTodo";

export const TodoList = props => {
  const [Todos, AddTodos] = useState([]);
  const addTodo = todo => {
    AddTodos([...Todos, todo]);
    console.log("todos>>>>>", Todos)
    
    const display = localStorage.getItem('todos');
     console.log(JSON.parse(display))
  };

  React.useEffect(() => localStorage.setItem('todos', JSON.stringify(Todos)) , [Todos])

  return (
    <div>
      <AddTodo addTodo={addTodo}></AddTodo>

    </div>
  );
};
// AddTodo([...Todos,todo])
  // const Display = Todos.map((i, key) => (<li key={key}>{i}</li>));
