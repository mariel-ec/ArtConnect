import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const UpdateDonor = () => {
  const { donorDetail } = useContext(DonorContext);
  const { donorId } = useParams();

  const [donorData, setDonorData] = useState({});

  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setDonorData({
      ...donorData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const updatedInfo = { ...donorData, _id: donorId };
    e.preventDefault();
    fetch(`/api/updatedonor`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          navigate(`/donordetails/${donorId}`);
        }
      });
  };

  return (
    <Wrapper>
      <div>Edit Donor Information</div>

      <Form onSubmit={submitHandler}>
        <ul>
          <label>Name:</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="name"
            type="text"
            placeholder={donorDetail.name}
          />

          <label>City:</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="city"
            type="text"
            placeholder={donorDetail.city}
          />

          <label>Email: </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="email"
            type="text"
            placeholder={donorDetail.email}
          />
          <label>Area of Interest (Art): </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="Art Interest"
            type="text"
            placeholder={donorDetail.artInterest}
          />

          <label>Profession: </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="Profession"
            type="text"
            placeholder={donorDetail.profession}
          />
          <h3>Most Recent Donation</h3>
          <label> Last Fundraiser Attended </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="artInterest"
            type="text"
            placeholder={donorDetail.fundraiserAttended}
          />

          <label> Last Donation Amount ($) </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="donationAmount"
            type="text"
            placeholder={donorDetail.donationAmount}
          />

          <label> Last Donation Date </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="donationDate"
            type="text"
            placeholder={donorDetail.donationDate}
          />
        </ul>

        <Button>Update</Button>
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

export default UpdateDonor;
