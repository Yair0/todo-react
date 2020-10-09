import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const TodoList = ({ todo, getTodoList }) => {
  const deleteTask = async (id, e) => {
    e.preventDefault();
    console.log(id);
    await axios.delete(`http://localhost:4000/tasks/${id}`);
    await getTodoList();
  };

  const doneTask = async (id, e) => {
    e.preventDefault();
    console.log(id);
    await axios.put(`http://localhost:4000/tasks/${id}`);
    await getTodoList();
  };

  return (
    <div>
      {todo.map((todo, i) => {
        return (
          <Card key={i} bg={todo.status === "done" ? "dark" : "light"}>
            <Card.Body>
              <Card.Title>
                <h2>Task: {todo.description}</h2>
              </Card.Title>
              <Card.Text>
                <Button
                  variant="warning"
                  onClick={(e) => doneTask(todo.id, e)}
                  disabled={todo.status === "done" ? true : false}
                >
                  Done
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={(e) => deleteTask(todo.id, e)}
                >
                  Delete
                </Button>{" "}
                <Link to={`/${todo.id}`}>
                  <Button variant="info">Info</Button>{" "}
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default TodoList;
