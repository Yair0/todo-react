import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TodoList from "./Components/Todo/TodoList";
import AddTodo from "./Components/Add/Add";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
