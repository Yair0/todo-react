import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

const AddTodo = () => {
  const [task, setTask] = useState([{ description: "" }]);

  const addTask = (event) => {
    event.preventDefault();
    //alert("You are submitting " + task.description);
    axios
      .post("http://localhost:3100/tasks", task)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const taskDescription = (event) => {
    setTask({ description: event.target.value });
  };

  return (
    <>
      <Form onSubmit={addTask}>
        <Form.Group controlId="addTask">
          <InputGroup>
            <Form.Control
              type="task"
              onChange={taskDescription}
              placeholder="I have to..."
            />
            <InputGroup.Append>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </InputGroup.Append>{" "}
          </InputGroup>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddTodo;
