import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const TodoList = () => {
  const [todo, setTodo] = useState([{ id: 1, description: "", status: "" }]);

  useEffect(() => {
    axios("http://localhost:3100")
      .then((result) => {
        setTodo(result.data);
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  }, []);
  const Cap = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
                    <Link>
                      <Button variant="warning">{Cap(todo.status)}</Button>{" "}
                    </Link>
                    <Link>
                      <Button variant="danger">Delete</Button>{" "}
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

/*
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <>
                <Link to={`/pokemon/${i + 1}`}>
                  <li key={i}>{pokemon.name}</li>
                </Link>
              </>
            );
          })}
        </ul>
        */
