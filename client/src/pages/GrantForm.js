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
      <div>Edit Grant Information</div>

      <Form onSubmit={submitHandler}>
        <ul>
          <label>Grant Name</label>
          <input
            onChange={onChangeHandler}
            name="nameOfGrant"
            type="text"
            value={grantDetail.nameOfGrant}
          />

          <label>Granting Body</label>
          <input
            onChange={onChangeHandler}
            name="grantBody"
            type="text"
            value={grantDetail.grantBody}
          />

          <label>Grant Amount $ </label>
          <input
            onChange={onChangeHandler}
            name="grantAmount"
            type="text"
            value={grantDetail.grantAmount}
          />

          <label>Due by: </label>
          <input
            onChange={onChangeHandler}
            name="dueDate"
            type="text"
            value={grantDetail.dueDate}
          />
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

export default UpdateGrant;
