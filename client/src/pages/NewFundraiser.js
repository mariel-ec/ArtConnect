import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddFundraiser = () => {
  const [fundraiserData, setFundraiserData] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setFundraiserData({
      ...fundraiserData,
      [e.target.name]: e.target.value,
    });
  };
  //post all information of new fundraiser created to mongodb
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`/api/newfundraiser`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(fundraiserData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          navigate(`/fundraiserdetails/${data.data._id}`);
        }
      });
  };

  return (
    <Wrapper>
      <h1>New Fundraiser Information</h1>

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
              value={fundraiserData.nameOfFundraiser}
            />
          </ol>
          <ol>
            <label>Fundraiser Date: </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="dateOfFundraiser"
              type="text"
              value={fundraiserData.dateOfFundraiser}
            />
          </ol>
          <ol>
            <label>Fundraiser Location: </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="locationOfFundraiser"
              type="text"
              value={fundraiserData.locationOfFundraiser}
            />
          </ol>
          <ol>
            <label>Coordinator: </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="coordinator"
              type="text"
              value={fundraiserData.coordinator}
            />
          </ol>
          <ol>
            <label>Fundraising Goal: </label>
            <input
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="fundraisingGoal"
              type="text"
              value={fundraiserData.fundraisingGoal}
            />
          </ol>
        </ul>
        <Button type="submit">Add ! </Button>
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
  margin-left: 300px;
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
  top: 6em;
  bottom: 0em;
  left: -21em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

export default AddFundraiser;
