//dashboard
import React from "react";
import DonorButton from "../images/Donors.png";
import FundraiserButton from "../images/Fundraisers.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ACLogo from "../images/ACLogo.png";
import DONORLOGO from "../images/DONORLOGO.png";
import FUNDLOGO from "../images/FUNDLOGO.png";
import GRANTSLOGO from "../images/GRANTSLOGO.png";

const HomePage = () => {
  return (
    <ItemsDiv>
      <LogoDiv>
        <Img src={ACLogo} alt="ArtConnectLogo" />
      </LogoDiv>

      <h3><em>Creating community through arts education</em></h3>

      <ButtonDiv>
        <DonorButtonContainer>
          <Link to="/donors">
            <Img src={DONORLOGO} alt="abstract art donor button" />
          </Link>
        </DonorButtonContainer>
        <FundButtonContainer>
          <Link to="/fundraisers">
            <Img src={FUNDLOGO} alt="abstract art fundraiser button" />
          </Link>
        </FundButtonContainer>
        <GrantButtonContainer>
          <Link to="/grants">
            <Img src={GRANTSLOGO} alt="abstract art grant button" />
          </Link>
        </GrantButtonContainer>
      </ButtonDiv>
    </ItemsDiv>
  );
};

export default HomePage;

const ItemsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

const div = styled.div`
  font-style: italic;
`;

const LogoDiv = styled.div`
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-left: 50%;
  margin-right: 50%;
`;
const Img = styled.img`
  height: 200px;
  display: absolute;
  position: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 10em;
  flex-grow: 1;
  padding-top: 50px;
  margin-left: 46%;
  margin-right: 50%;
`;

const DonorButtonContainer = styled.div`
  height: 175px;
  width: 175px;
  display: flex;
  opacity: 100%;
  
  :hover{
    opacity:70%;
  }
`;

const FundButtonContainer = styled.div`
  height: 175px;
  width: 175px;
  display: flex;
  opacity: 100%;
  :hover {
    opacity: 70%;
  }
`;

const GrantButtonContainer = styled.div`
  height: 175px;
  width: 175px;
  display: flex;
  opacity: 100%;
  :hover {
    opacity: 70%;
  }
`;

const link = styled.link`
  height: 100px;
  width: 100px;
`;
