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
      <h1>Edit Donor Information</h1>

      <Form onSubmit={submitHandler}>
        <ul>
          <ol><label>Name:</label>
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
          </ol>
<ol>
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
</ol><ol>
          <label>Profession: </label>
          <input
            onChange={onChangeHandler}
            name="profession"
            type="text"
            value={donorDetail.profession}
          /></ol>
          <ol>
          <h3>Most Recent Donation</h3>

          <label> Last Fundraiser Attended </label>
          <input
            onChange={onChangeHandler}
            name="fundraiserAttended"
            type="text"
            value={donorDetail.fundraiserAttended}
          />
          </ol><ol>

          <label> Last Donation Amount ($) </label>
          <input
            onChange={onChangeHandler}
            name="donationAmount"
            type="text"
            value={donorDetail.donationAmount}
          />
</ol><ol>
          <label> Last Donation Date </label>
          <input
            onChange={onChangeHandler}
            name="donationDate"
            type="text"
            value={donorDetail.donationDate}
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
  padding: 20px;
  margin-top: 90px;
  padding-top: 80px;
  padding-bottom: 80px;
 
`;

const Form = styled.form`

display: inline-block;
box-sizing: border-box;
  width: 90vw;
  padding: 90px;
  margin-left: 800px;
 
  
  
  /* justify-content: center; */
  
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
  top: 3em;
  bottom: 0em;
  left: 5em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
  
`;

export default UpdateDonor;
