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
      <h1>Edit Fundraiser Information</h1>

      <Form onSubmit={submitHandler}>
        <ul>
          <ol>
            <label>Fundraiser Name: </label>

            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="nameOfFundraiser"
              type="text"
              value={fundraiserDetail.nameOfFundraiser}
            />
          </ol>
          <ol>
            <label>Fundraiser Date</label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="dateOfFundraiser"
              type="text"
              value={fundraiserDetail.dateOfFundraiser}
            />
          </ol>
          <ol>
            <label>Fundraiser Location </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="locationOfFundraiser"
              type="text"
              value={fundraiserDetail.locationOfFundraiser}
            />
          </ol>
          <ol>
            <label>Coordinator</label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="coordinator"
              type="text"
              value={fundraiserDetail.coordinator}
            />
          </ol>
          <ol>
            <label>Fundraising Goal</label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="fundraisingGoal"
              type="text"
              value={fundraiserDetail.fundraisingGoal}
            />
          </ol>
          <ol>
            <label>Total Raised</label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="totalRaised"
              type="text"
              placeholder={fundraiserDetail.totalRaised}
            />
          </ol>
          <Button type="submit">Update</Button>
        </ul>
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
  left: 0em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

export default UpdateFundraiser;
