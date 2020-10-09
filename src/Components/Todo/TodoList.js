import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const TodoList = ({ todo, getTodoList }) => {
  const Cap = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const deleteTask = async (id, e) => {
    e.preventDefault();
    console.log(id);
    await axios.delete(`http://localhost:4000/tasks/${id}`);
    getTodoList();
  };

  return (
    <>
      <div>
        {todo.map((todo, i) => {
          return (
            <>
              <Card key={i}>
                <Card.Body>
                  <Card.Title>
                    <h3>{todo.description}</h3>
                  </Card.Title>
                  <Card.Text>
                    <Button variant="warning">{Cap(todo.status)}</Button>{" "}
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
