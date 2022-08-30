import React, { useState, useContext, useEffect, useParams } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { DonorContext } from ""
// import GrantLogo from "../images/dummyprofilepic/GLogo.png"

export const GrantDash = () => {
  // const grantId = useParams().grantId;
  const { grant, setGrant } = useContext(DonorContext);
  const navigate = useNavigate();
  const handleGrantDetail = (url) => {
    navigate(url);
  };

  useEffect(() => {
    fetch(`/api/grants`)
      .then((res) => res.json())
      .then((data) => {
        setGrant(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (!grant) return <Loading>Loading...</Loading>;

  // const grantsToShow = grant.slide();

  return (
    <Wrapper>
      <h1>Grants</h1>
      <Link to="/newgrant">
        <ButtonNew>Add a new grant</ButtonNew>
      </Link>
      <Div>
        {grant.map((grants) => {
          return (
            <Grants
              key={grants._id}
              onClick={() => {
                handleGrantDetail(`/grantdetails/${grants?._id}`);
              }}
            >
              <DetailDiv>
                {/* <Img src={GrantLogo} /> */}
                <NameOfGrant>{`${grants.nameOfGrant}`}</NameOfGrant>
                <GrantBody>{`${grants.grantBody}`}</GrantBody>
                <GrantAmount>{`${grants.grantAmount}`}</GrantAmount>
              </DetailDiv>
            </Grants>
          );
        })}
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  margin: 0px;
  gap: 10px;
  padding: 4em;
  background: #f7f5ed;
  flex-wrap: wrap;
`;
const Div = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5em;
  gap: 2em;
  flex-grow: 1;
`;

const DetailDiv = styled.div`
  color: black;
  flex: 30%;
  display: flex;
  padding-left: 5vh;
  padding-right: 5vh;
  align-items: center;
`;

const Grants = styled.button`
  border: none;
  display: inline-flex;
  border-radius: 0.5em;
  box-shadow: 0.5em 0.5em 0.5em 0.5em lightgrey;
  width: 50em;
  height: 5em;
  justify-content: space-between;
  align-items: center;
  /* gap: 10px; */
  flex-direction: column;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: #e2d3cf;

    color: black;
    transition: 0.5s;
    transform: scale3d(1.2, 1.2, 1);
    font-weight: bold;
  }
`;

const Img = styled.div`
  position: left;
  max-height: 50px;
  padding-left: 10vh;
  padding-right: 10vh;
`;

const NameOfGrant = styled.div`
  bottom: 15vh;
  padding-left: 5vh;
  padding-right: 5vh;
  color: #a10a0a;
  padding-top: 1em;
`;

const GrantBody = styled.div`
  bottom: 15vh;
  padding-left: 5vh;
  padding-right: 5vh;
  color: #a10a0a;
  padding-top: 1em;
`;

const Loading = styled.div`
  bottom: 15vh;
  left: 3vw;
  color: #a10a0a;
  padding-top: 1em;
`;
const GrantAmount = styled.div`
  bottom: 15vh;
  padding-left: 5vh;
  padding-right: 5vh;
  color: #a10a0a;
  padding-top: 1em;
`;

const ButtonNew = styled.button`
  border: none;
  align-self: flex-end;
  border-radius: 1.5em;
  width: 20em;
  height: 2.8em;
  font-size: 0.9em;
  background-color: #959595;
  color: black;
  position: relative;
  top: 0.2em;
  left: 10em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

export default GrantDash;
