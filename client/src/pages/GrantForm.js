import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const UpdateGrant = () => {
  const { grantDetail, setGrantDetail } = useContext(DonorContext);
  const { grantId } = useParams();

  console.log(grantId);

  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    console.log("Hi");
    setGrantDetail({
      ...grantDetail,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const updatedInfo = { ...grantDetail, _id: grantId };
    //send all info of updated grant information to mongo
    e.preventDefault();
    fetch(`/api/updateGrant`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          navigate(`/grantdetails/${grantId}`);
        }
      });
  };

  return (
    <Wrapper>
      <h1>Edit Grant Information</h1>

      <Form onSubmit={submitHandler}>
        <ul>
          <ol>
            <label>Grant Name</label>
            <input
              onChange={onChangeHandler}
              name="nameOfGrant"
              type="text"
              value={grantDetail.nameOfGrant}
            />
          </ol>
          <ol>
            <label>Granting Body</label>
            <input
              onChange={onChangeHandler}
              name="grantBody"
              type="text"
              value={grantDetail.grantBody}
            />
          </ol>
          <ol>
            <label>Grant Amount $ </label>
            <input
              onChange={onChangeHandler}
              name="grantAmount"
              type="text"
              value={grantDetail.grantAmount}
            />
          </ol>
          <ol>
            <label>Due by: </label>
            <input
              onChange={onChangeHandler}
              name="dueDate"
              type="text"
              value={grantDetail.dueDate}
            />
          </ol>
        </ul>
        <Button type="submit">Update</Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.5em;
  margin-top: 90px;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Form = styled.form`
  width: 90vw;
  padding: 90px;
  display: flex;
  margin-left: 290px;
  align-items: left;
  justify-content: center;
  border-color: lightgrey;
  color: black;
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

export default UpdateGrant;
