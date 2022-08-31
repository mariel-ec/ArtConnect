import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const UpdateFundraiser = () => {
  const { fundraiserId } = useParams();
  const { fundraiserDetail, setFundraiserDetail } = useContext(DonorContext);
  // const [fundraiserData, setFundraiserData] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setFundraiserDetail({
      ...fundraiserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const updatedInfo = { ...fundraiserDetail, _id: fundraiserId };
    e.preventDefault();
    fetch(`/api/updatefundraiser`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(fundraiserDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          navigate(`/fundraiserdetails/${fundraiserId}`);
        }
      });
  };

  return (
    <Wrapper>
      <div>Edit Fundraiser Information</div>

      <form onSubmit={submitHandler}>
        <label>Fundraiser Name: </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="nameOfFundraiser"
          type="text"
          value={fundraiserDetail.nameOfFundraiser}
        />

        <label>Fundraiser Date</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="dateOfFundraiser"
          type="text"
          value={fundraiserDetail.dateOfFundraiser}
        />

        <label>Fundraiser Location </label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="locationOfFundraiser"
          type="text"
          value={fundraiserDetail.locationOfFundraiser}
        />

        <label>Coordinator</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="coordinator"
          type="text"
          value={fundraiserDetail.coordinator}
        />

        <label>Fundraising Goal</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="fundraisingGoal"
          type="text"
          value={fundraiserDetail.fundraisingGoal}
        />

        <label>Total Raised</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          name="totalRaised"
          type="text"
          placeholder={fundraiserDetail.totalRaised}
        />

        <button type="submit">Update</button>
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

export default UpdateFundraiser;
