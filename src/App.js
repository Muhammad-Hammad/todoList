import React,{useState,Fragment,useEffect} from 'react';
import './App.css';
import { TodoList } from "./components/TodoList";
import { AddTodo } from './components/AddTodo';
import { TodoItem } from './components/TodoItem'
function App(props) {
  useEffect(() => {
    const todos = localStorage.getItem('todos');

    (todos) ? console.log("todos",JSON.parse(todos)) : console.log("no todos") 
    
}, [])
  return (
    <Fragment >
    <TodoList></TodoList>
    </Fragment>
  );
}

export default App;
