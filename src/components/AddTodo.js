import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ButtonAppBar } from "./Navbar";
import { FormControl, Input } from "@material-ui/core";

export const AddTodo = props => {
  const [todo, currentItem] = useState("");

  const prevent = e => {
    e.preventDefault();
    props.addTodo(todo);
  };

  const handleChange = e => currentItem(e.target.value);

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={prevent}>
        <FormControl>
          <Input placeholder="task" onChange={handleChange} />
          <Button variant="contained" color="primary" type="submit">
            submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
