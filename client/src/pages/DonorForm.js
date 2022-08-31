import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const UpdateDonor = () => {
  const { donorDetail, setDonorDetail } = useContext(DonorContext);

  const { donorId } = useParams();

  // const [donorData, setDonorData] = useState({});

  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setDonorDetail({
      ...donorDetail,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const updatedInfo = { ...donorDetail, _id: donorId };
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
            onChange={onChangeHandler}
            name="name"
            type="text"
            value={donorDetail.name}
            // placeholder={donorDetail.name}
          />

          <label>City:</label>
          <input
            onChange={onChangeHandler}
            name="city"
            type="text"
            value={donorDetail.city}
          />

          <label>Email: </label>
          <input
            onChange={onChangeHandler}
            name="email"
            type="text"
            value={donorDetail.email}
          />
          <label>Area of Interest (Art): </label>
          <input
            onChange={onChangeHandler}
            name="artInterests"
            type="text"
            value={donorDetail.artInterest}
          />

          <label>Profession: </label>
          <input
            onChange={onChangeHandler}
            name="profession"
            type="text"
            value={donorDetail.profession}
          />
          <h3>Most Recent Donation</h3>
          <label> Last Fundraiser Attended </label>
          <input
            onChange={onChangeHandler}
            name="fundraiserAttended"
            type="text"
            value={donorDetail.fundraiserAttended}
          />

          <label> Last Donation Amount ($) </label>
          <input
            onChange={onChangeHandler}
            name="donationAmount"
            type="text"
            value={donorDetail.donationAmount}
          />

          <label> Last Donation Date </label>
          <input
            onChange={onChangeHandler}
            name="donationDate"
            type="text"
            value={donorDetail.donationDate}
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

export default UpdateDonor;
