import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";


const UpdateFundraiser = () => {
    const { fundraiserId } = useParams;
    const [fundraiserData, setFundraiserData] = useState({});
    const navigate = useNavigate();
    const onChangeHandler = (e) => {
      setFundraiserData({
        ...fundraiserData,
        [e.target.name]: e.target.value,
      });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      fetch(`/api/updatefundraisert/${fundraiserId}`,
        {
          headers: { "Content-Type": "application/json" },
          method: "PATCH",
          body: JSON.stringify(fundraiserData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              navigate(`/fundraiser/${fundraiserId}`);
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
          />
  
          <label>Fundraiser Date</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="dateOfFundraiser"
            type="text"
          />
  
          <label>Fundraiser Location </label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="locationOfFundraiser"
            type="text"
          />
  
          <label>Coordinator</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="coordinator"
            type="text"
          />

          <label>Fundraising Goal</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="fundraisingGoal"
            type="text"
          />

     <label>Total Raised</label>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name="totalRaised"
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

  export default UpdateFundraiser;