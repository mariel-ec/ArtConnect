import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddDonor = () => {
  const [newDonor, setNewDonor] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setNewDonor({
      ...newDonor,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`/api/newdonor`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newDonor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          navigate(`/donordetails/${data.data._id}`);
        }
      });
  };

  return (
    <Wrapper>
      <div>New Donor Information</div>

      <Form onSubmit={submitHandler}>
        <ul>
          <label>Name:</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="name"
            type="text"
            value={newDonor.name}
          />

          <label>City:</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="city"
            type="text"
            value={newDonor.city}
          />

          <label>Email: </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="email"
            type="text"
            value={newDonor.email}
          />
          <label>Area of Interest (Art): </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="artInterests"
            type="text"
            value={newDonor.artInterests}
          />

          <label>Profession: </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="profession"
            type="text"
            value={newDonor.profession}
          />
          <h3>Most Recent Donation</h3>
          <label> Last Fundraiser Attended </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="fundraiserAttended"
            type="text"
            value={newDonor.fundraiserAttended}
          />

          <label> Last Donation Amount ($) </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="donationAmount"
            type="text"
            value={newDonor.donationAmount}
          />

          <label> Last Donation Date </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="donationDate"
            type="text"
            value={newDonor.donationDate}
          />
        </ul>

        <Button>Add !</Button>
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

export default AddDonor;
