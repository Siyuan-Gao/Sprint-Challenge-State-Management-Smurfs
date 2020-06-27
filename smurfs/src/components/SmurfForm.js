import React, { useState } from "react";
import { postSmurf } from "../actions/action";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "reactstrap";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 5% auto;
`;
const Input = styled.input`
  opacity: 0.5;
`;
const textColor = {
  color: "purple",
};

const SmurfForm = (props) => {
  const [char, setChar] = useState({
    //[{"name":"Brainey","age":200,"height":"5cm","id":0}]
    name: "",
    age: "",
    height: "",
  });

  const onChange = (e) => {
    setChar({ ...char, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postSmurf(char);
    setChar({
      name: "",
      age: "",
      height: "",
      id: Date.now(),
    });
  };
  return (
    <Form onSubmit={handleSubmit} className="inputFields">
      <Input
        type="text"
        name="name"
        placeholder="Name of Smurf"
        onChange={onChange}
      />
      <Input
        type="text"
        name="age"
        placeholder="Age of Smurf"
        onChange={onChange}
      />
      <Input
        type="text"
        name="height"
        placeholder="Height of Smurf"
        onChange={onChange}
      />

      <Button outline style={textColor} color="secondary">
        Submit
      </Button>
    </Form>
  );
};

export default connect(null, { postSmurf })(SmurfForm);
