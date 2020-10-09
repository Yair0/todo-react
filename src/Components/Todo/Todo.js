import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Todo = () => {
  let { id } = useParams();
  const [task, setTask] = useState({
    id: 1,
    description: "",
    status: "",
    created_at: "",
    updated_at: "",
  });

  const getTask = async (id) => {
    const result = await axios(`http://localhost:4000/tasks/${id}`);
    setTask(result.data);
  };
  const Cap = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    getTask(id);
  }, [id]);

  return (
    <>
      <h1>Task #{task.id}</h1>
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>Task: {task.description}</h3>
          </Card.Title>

          <Card.Text>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Status:</td>
                  <td>{Cap(task.status)}</td>
                </tr>
                <tr>
                  <td>Created at:</td>
                  <td>{task.created_at}</td>{" "}
                </tr>
                <tr>
                  <td>Updated at:</td>
                  <td>{task.updated_at}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Todo;
