import React, { useRef,useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ButtonAppBar } from "./Navbar";
import { FormControl, Input } from "@material-ui/core";

export const TodoItem = () => {
   const effect = useEffect(() => {
        const todos = localStorage.getItem('todos');
        (todos) ? console.log("todos",todos) : console.log("no todos") 
        
    }, [])
    return(
        <div>
            
        </div>
    )
}
