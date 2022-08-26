import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const FundraiserDetails = () => {
    const fundraiserId = useParams().fundraiserId;
    const { setFundraiserDetail, fundraiserDetail} = useContext(DonorContext);

    useEffect(() => {
        fetch(`api/fundraiserdetails/${ fundraiserId }`)
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
                <NameOfFundraiser>{`${fundraiserDetail.nameOfFundraiser}`}</NameOfFundraiser>
                <Coordinator>{`${fundraiserDetail.coordinator}`}</Coordinator>
                <FundraisingGoal>{`${fundraiserDetail.fundraisingGoal}`}</FundraisingGoal>
            </Fundraisers>
        </Wrapper>
    
    </>

);



};

const Wrapper = styled.div`
  display: flex;
  font-family: var(--body-font);
  align-items: center;
  flex-direction: column;
  justify-items: center;
  margin-left: 30em;
  margin-top: 1em;
  width: 50em;
  padding: 4.5em;
  background: linear-gradient(45deg, #bacabe 0%, #bbcffa 90%);
  flex-wrap: wrap;
`;

const Fundraisers = styled.div`
  display: flex;
  outline: 0.1rem solid #1f6caa;
  border-radius: 0.8em;
  box-shadow: 0.5em 0.5em 3em 0.5em ghostwhite;
  width: 25em;
  height: 40em;
  justify-content: space-between;
  align-items: center;
  margin-left: 8em;
  flex-direction: column;
`;

const NameOfFundraiser = styled.div`
  font-size: 14px;
  color: darkblue;
`;

const Coordinator = styled.div`
  font-size: 14px;
  color: darkblue;
`;

const FundraisingGoal = styled.div`
  font-size: 14px;
  color: darkblue;
`;

export default FundraiserDetails;