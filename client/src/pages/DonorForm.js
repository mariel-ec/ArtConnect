import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const UpdateDonor = () => {
  const { donorId } = useParams;
  const [donorData, setDonorData] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setDonorData({
      ...DonorData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`/api/updatedonor/${donorId}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify(donorData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            navigate(`/donor/${donorId}`);
          }
        });
  };

  return (
    <Wrapper>
      <div>Edit Donor Information</div>

      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="name"
          type="text"
        />

        <label>Address</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="address"
          type="text"
        />

        <label>Email </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="email"
          type="text"
        />

        <label>Profession </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="Profession"
          type="text"
        />

        <label> Art Interest </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="artInterest"
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

export default UpdateDonor;

