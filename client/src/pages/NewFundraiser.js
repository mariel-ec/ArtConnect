import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddFundraiser = () => {
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
        fetch(`/api/newfundraiser`, {
            headers: { "Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(fundraiserData),
        })
        .then((res) => res.json ())
        .then((data) => {
            if (data.status === 201) {
                navigate(`/fundraiserdetails/${data.data._id}`);
            }
        });
    };

    return (
        <Wrapper>
            <div>Edit Fundraiser Information
            </div>

            <Form onSubmit={submitHandler}>
                <ul>
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





                </ul>
                <Button>Add ! </Button> 
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

export default AddFundraiser;