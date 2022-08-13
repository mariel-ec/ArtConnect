//dashboard
import React from "react";
import DonorButton from "../images/Donors.png";
import FundraiserButton from "../images/Fundraisers.png";
import styled from "styled-components";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Art Connect'd</h1>
      <DonorButtonContainer>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/donordash";
          }}
        >
          <img src={DonorButton} alt="abstract art donor button" />
        </button>
        </DonorButtonContainer>
        <FundButtonContainer>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/fundraiser";
          }}
        >
          <img src={FundraiserButton} alt="abstract art fundraiser button" />
        </button>
        </FundButtonContainer>
     
    </div>
  );
};

export default HomePage;

const DonorButtonContainer = styled.div`
  display: flex;
  opacity: 50%;
  border: none;
`;

const FundButtonContainer = styled.div`
display: flex;
opacity: 50%;

`
