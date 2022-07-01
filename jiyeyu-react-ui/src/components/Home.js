import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/style.css"

const Home = (props) => {
  const [state, setState] = useState({
    sepalLength: 0.0,
    sepalWidth: 0.0,
    petalLength: 0.0,
    petalWidth: 0.0,
    epoch: 0.0,
    lr: 0.0
    
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/result",
      state,
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <br></br>
      <h1>Iris Traing Form</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
        <br></br><br></br>
          <Form.Label>Sepal Length</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Sepal Length"
            name="sepalLength"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sepal Width</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Sepal Width"
            name="sepalWidth"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Petal Length</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Petal Length"
            name="petalLength"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Petal Width</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Petal Width"
            name="petalWidth"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Epoch</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Epoch"
            name="epoch"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Learning Rate</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Learning Rate"
            name="lr"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Predict
        </Button>
      </Form>
    </div>
  );
};
export default Home;
