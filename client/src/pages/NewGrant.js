import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const AddGrant = () => {
  const { grantId } = useParams;
  const [grantData, setGrantData] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setGrantData({
      ...grantData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    console.log("submit")
    e.preventDefault();
    fetch(`/api/newgrant`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(grantData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          navigate(`/grantdetails/${data.data._id}`);
        }
      });
  };

  return (
    <Wrapper>
      <div>New Grant Information</div>

      <Form onSubmit={submitHandler}>
        <ul>
          <label>Grant Name</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="nameOfGrant"
            type="text"
          />

          <label>Granting Body</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="grantBody"
            type="text"
          />

          <label>Grant Amount $ </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="grantAmount"
            type="text"
          />

          <label>Due by: </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="dueDate"
            type="text"
          />
        </ul>
        <Button type="submit"> Add !</Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 90px;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Form = styled.form`
  width: 90vw;
  padding: 90px;
  display: flex;
  align-items: left;
  justify-content: center;
  border-color: lightgrey;
  color: black;
`;

const Button = styled.button`
  width: 30vh;
  background-color: green;
  border: none;
  border-radius: 20px;
  height: 30px;
  width: 500px;
  font-weight: lighter;
  font-size: 18px;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: orange;
    transition: 0.7s;
  }
`;

export default AddGrant;
