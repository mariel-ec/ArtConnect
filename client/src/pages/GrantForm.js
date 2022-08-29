import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const UpdateGrant = () => {
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
    e.preventDefault();
    fetch(`/api/updateGrant/${grantId}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify(grantData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            navigate(`/grant/${grantId}`);
          }
        });
  };

  return (
    <Wrapper>
      <div>Edit Grant Information</div>

      <form onSubmit={submitHandler}>
        <label>Grant Name</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="GrantName"
          type="text"
        />

        <label>Granting Body</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="GrantBody"
          type="text"
        />

        <label>Grant Amount $ </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="GrantAmount"
          type="text"
        />

        <label>Due by: </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="DueDate"
          type="text"
        />

        <button>Update</button>
      </form>
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

const Form = styled.div`
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
