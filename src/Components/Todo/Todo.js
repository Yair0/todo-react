import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Todo = () => {
  let { id } = useParams();
  const [task, setTask] = useState([
    { id: 1, description: "", status: "", created_at: "", updated_at: "" },
  ]);

  async function getTask() {
    const result = await axios(`http://localhost:4000/tasks/${id}`);
    setTask(result.data);
  }

  useEffect(getTask, []);

  return (
    <>
      <h1>Task {task.id}</h1>
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>{task.description}</h3>
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Created at: {task.created_at}</ListGroup.Item>
            <ListGroup.Item>Updated at: {task.updated_at}</ListGroup.Item>
          </ListGroup>
          <Card.Text>
            <Button variant="warning">{task.status}</Button>{" "}
            <Button variant="danger">Delete</Button>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Todo;
