import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const DonorDetails = () => {
  // const [count, setCount] = useState(0);
 
  const  donorId = useParams().donorId;
  // const o_id = useParams().o_id;
  const { setDonorDetail, donorDetail } = useContext(DonorContext);
  

  // const handleSelect = (e) => {
  //   setCount(e.target.value);
  // };
  //  fetch(`api/donors/${donorId}`)
  // 

  useEffect(() => {
    fetch(`/api/donordetails/${ donorId }`)
      .then((res) => res.json())
      .then((data) => {
        setDonorDetail(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [donorId]);

  if (!donorDetail) {
    return <div>loading...</div>;
  }

  return (
    <>
    
      <Wrapper>
        <Donors key={donorDetail.o_id}>
          {/* <Address>{`${donorDetail.address}`}</Address> */}
          <Email>{`${donorDetail.email}`}</Email>
          <Profession>{`${donorDetail.profession}`}</Profession>
          <ArtInterest>{`${donorDetail.artInterest}`}</ArtInterest>
          <FundraiserAttended>{`${donorDetail.fundraiserAttended}`}</FundraiserAttended>
          <DonationAmount>{`${donorDetail.donationAmount}`}</DonationAmount>
        </Donors>
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
// const Address = styled.div`
//   display: flex;
//   position: relative;
//   left: 5em;
//   bottom: 1.7em;
// `;
const Email = styled.div`
  font-size: 14px;
  color: darkblue;
`;

const ArtInterest = styled.div`
  font-size: 14px;
  color: darkblue;
`;

const FundraiserAttended = styled.div`
  font-size: 14px;
  color: darkblue;
`;

const DonationAmount = styled.div`
  font-size: 14px;
  color: darkblue;
`;
const Profession = styled.div`
  display: flex;
  position: relative;
  left: 5em;
  bottom: 1.7em;
`;

const Donors = styled.div`
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

export default DonorDetails;
