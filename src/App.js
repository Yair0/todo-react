import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoList from "./Components/Todo/TodoList";
import Todo from "./Components/Todo/Todo";
import AddTodo from "./Components/Add/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([{ id: 1, description: "", status: "" }]);

  const getTodoList = async () => {
    const result = await axios("http://localhost:4000");
    setTodo(result.data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h1>Todo List</h1>
            <AddTodo getTodoList={getTodoList} />
            <TodoList todo={todo} getTodoList={getTodoList} />
          </Route>
          <Route exact path="/:id">
            <Todo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
