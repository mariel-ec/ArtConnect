//dashboard
import React from "react";
import DonorButton from "../images/Donors.png";
import FundraiserButton from "../images/Fundraisers.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Art Connect'd</h1>
      <DonorButtonContainer>
        <Link to="/donors">
          <img src={DonorButton} alt="abstract art donor button" />
        </Link>
      </DonorButtonContainer>
      <FundButtonContainer>
        <Link to="/fundraisers">
        <img src={FundraiserButton} alt="abstract art fundraiser button" />
        </Link>
      </FundButtonContainer>
      <GrantButtonContainer>
        <Link to="/Grants">
          <div>grants</div>
        </Link>
      </GrantButtonContainer>

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
`;

const GrantButtonContainer = styled.div`
  display: flex;
  opacity: 50%;
`;
