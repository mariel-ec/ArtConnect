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
    console.log("submit");
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
      <h1>New Grant Information</h1>

      <Form onSubmit={submitHandler}>
        <ul>
          <ol>
            <label>Grant Name</label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="nameOfGrant"
              type="text"
            />
          </ol>
          <ol>
            <label>Granting Body</label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="grantBody"
              type="text"
            />
          </ol>
          <ol>
            <label>Grant Amount $ </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="grantAmount"
              type="text"
            />
          </ol>
          <ol>
            <label>Due by: </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="dueDate"
              type="text"
            />
          </ol>
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
  margin-left: 300px;
`;

const Button = styled.button`
  border: none;
  align-self: flex-end;
  border-radius: 1.5em;
  width: 20em;
  height: 2.8em;
  font-size: 0.9em;
  background-color: #959595;
  color: black;
  position: relative;
  margin-bottom: 1em;
  top: 6em;
  bottom: 0em;
  left: -20em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

export default AddGrant;
