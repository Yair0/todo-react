import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

const AddTodo = ({ getTodoList }) => {
  const [task, setTask] = useState([{ description: "" }]);

  const addTask = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/tasks", task);
    getTodoList();
    document.getElementById("taskText").value = "";
  };

  const taskDescription = (e) => {
    setTask({ description: e.target.value });
  };

  return (
    <>
      <Form onSubmit={addTask}>
        <Form.Group controlId="addTask">
          <InputGroup>
            <Form.Control
              type="task"
              onChange={taskDescription}
              id="taskText"
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
