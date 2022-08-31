import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";
import FUNDLOGO from "../images/FUNDLOGO.png";

const FundraiserDetails = () => {
    const fundraiserId = useParams().fundraiserId;
    const { setFundraiserDetail, fundraiserDetail} = useContext(DonorContext);
    const navigate = useNavigate();

  const deleteHandler = () => {
    fetch(`/api/deletefundraiser/${fundraiserId}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 200) {
        window.alert("Fundraiser deleted !");
        setTimeout(() => {
          navigate("/fundraisers");
        }, 2000)
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };


    useEffect(() => {
        fetch(`/api/fundraiserdetails/${ fundraiserId }`)
        .then((res) => res.json())
        .then((data) => {
            setFundraiserDetail(data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [fundraiserId]);

    if (!fundraiserDetail) {
        return <div>loading...</div> ;
    }

return (
    <>
        <Wrapper>
            <Fundraisers key={fundraiserDetail.o_id}>
              <ul>
                <Img src={FUNDLOGO}/>
                <NameOfFundraiser>Fundraiser's Name: {`${fundraiserDetail.nameOfFundraiser}`}</NameOfFundraiser>
                <DateOfFundraiser>Date: {`${fundraiserDetail.dateOfFundraiser}`}</DateOfFundraiser>
                
                <Coordinator>Coordinator: {`${fundraiserDetail.coordinator}`}</Coordinator>
                <FundraisingGoal>Fundraising Goal: {`${fundraiserDetail.fundraisingGoal}`}</FundraisingGoal>
                <TotalFundraised>Total Fundraised:{`${fundraiserDetail.totalFundraised}`}</TotalFundraised>
          <Button 
            onClick={() => {
              navigate(`/fundraiserdetails/${fundraiserId}/fundraiserform`);
            }}
            >Edit</Button>
            
            <Button onClick={deleteHandler}> Delete Fundraiser</Button>
          
           </ul>
            </Fundraisers>
        </Wrapper>
    
    </>

);



};

const Wrapper = styled.div`
  display: flex;
  /* font-family: var(--body-font); */
  align-items: center;
  flex-direction: column;
  justify-items: center;
  /* margin-left: 30em;
  margin-top: 1em; */
  /* width: 50em; */
  padding: 4.5em;

  flex-wrap: wrap;
  background-color: #f7f5ed;
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
 top:4em;
  left: 4.3em;
  margin-bottom: 1em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

const Img = styled.img`
height: 300px;
display: flex;
margin-left: 50px;
margin-top: -20px;


`

const Fundraisers = styled.div`
  display: flex;
  outline: 0.1rem solid #1f6caa;
  border-radius: 0.8em;
  box-shadow: 0.5em 0.5em 3em 0.5em ghostwhite;
  width: 25em;
  height: 40em;
  justify-content: space-between;
  align-items: center;
  margin-left: 5em;
  flex-direction: column;
`;

const NameOfFundraiser = styled.div`
  margin-left: 65px;
  font-size: 18px;
  color: black;
`;

const DateOfFundraiser = styled.div`
margin-left: 65px;
  font-size: 18px;
  color: black;
`
const LocationOfFundraiser = styled.div`
margin-left: 65px;
  font-size: 18px;
  color: black
`

const Coordinator = styled.div`
margin-left: 65px;
  font-size: 18px;
  color: black
`;

const FundraisingGoal = styled.div`
margin-left: 65px;
  font-size: 18px;
  color: black;
`;
const TotalFundraised = styled.div`
margin-left: 65px;
  font-size: 18px;
  color: black;
`

export default FundraiserDetails;