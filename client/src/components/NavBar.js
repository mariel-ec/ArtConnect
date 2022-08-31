import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ACLogo from "../images/ACLogo.png";
import { useState } from "react";

const Nav = () => {
  return (
    <Wrapper>
      <LeftSide>
        <LogoContainer>
          <Img src={ACLogo} alt="ArtConnectLogo" />
        </LogoContainer>

        <NavLink to="/"> Home </NavLink>
        <NavLink to="/donors">Donors</NavLink>
        <NavLink to="/fundraisers"> Fundraisers </NavLink>
        <NavLink to="/grants"> Grants </NavLink>
      </LeftSide>

      <RightSide>
        <SearchBar>
          <Input type="text" placeholder="search..." />
          <Button>🔍︎</Button>
        </SearchBar>
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 80%;
  background-color: #e2e0d4;

  width: 100%;
  height: 80px;
  display: flex;
`;

const LeftSide = styled.div`
  flex: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px;
  gap: 3em;
  flex-grow: 1;
  
`;

const LogoContainer = styled.div``;

const Img = styled.img`
  max-height: 75px;
  border: none;
  border-radius: 20%;
`;

const RightSide = styled.div`
  flex: 30%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 50px;
`;

const SearchBar = styled.div`
  max-height: 40px;
  display: flex;

  border-radius: 8%;
  align-items: right;
  justify-content: flex-end;
  padding-right: 1px;
`;

const Input = styled.input`
  width: 250px;
  border: none;
  border-radius: 30px;
  padding-left: 15px;
`;

const Button = styled.button`
  height: 32px;
  width: 50px;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: lightcoral;
    opacity: 50%;
    border-radius: 60%;
  }
`;

export default Nav;

// `

// CSS:

// .app {
//     width: 100vw;
//     Height: 100vw;
// }

// body {
//     margin: 0;
//     padding: 0;
// }
