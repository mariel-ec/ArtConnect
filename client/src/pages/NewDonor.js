import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddDonor = () => {
  const [newDonor, setNewDonor] = useState({});
  const navigate = useNavigate();

  const [uploadedFile, setUploadedFile] = useState({});

  const onChangeHandler = (e) => {
    setNewDonor({
      ...newDonor,
      [e.target.name]: e.target.value,
    });
  };
  //submit new donor info to mongodb
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
  //return includes form for all new donor info, button to send details to mongo
  return (
    <Wrapper>
      <h1>New Donor Information</h1>

      <Form onSubmit={submitHandler}>
        <ul>
          <ol>
            <label>Upload Profile Image: </label>
          </ol>
          <ol>
            <input
              type="file"
              onChange={(event) => {
                setUploadedFile(event.target.files);
              }}
              value={newDonor.imageSrc}
            />
          </ol>
          <ol>
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
          </ol>
          <ol>
            <label>Email: </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="email"
              type="text"
              value={newDonor.email}
            />
          </ol>
          <ol>
            <label>Area of Interest (Art): </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="artInterest"
              type="text"
              value={newDonor.artInterests}
            />
          </ol>
          <ol>
            <label>Profession: </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="profession"
              type="text"
              value={newDonor.profession}
            />
          </ol>
          <h3>Most Recent Donation</h3>
          <ol>
            <label> Last Fundraiser Attended </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="fundraiserAttended"
              type="text"
              value={newDonor.fundraiserAttended}
            />
          </ol>
          <ol>
            <label> Last Donation Amount ($) </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="donationAmount"
              type="text"
              value={newDonor.donationAmount}
            />
          </ol>
          <ol>
            <label> Last Donation Date </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="donationDate"
              type="text"
              value={newDonor.donationDate}
            />
          </ol>
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

const Form = styled.form`
  width: 90vw;
  padding: 90px;
  display: flex;
  align-items: left;
  justify-content: center;
  border-color: lightgrey;
  color: black;
  margin-left: 340px;
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
  top: 7em;
  bottom: em;
  left: -25em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

export default AddDonor;
