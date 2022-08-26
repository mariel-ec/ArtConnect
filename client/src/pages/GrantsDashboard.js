import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DonorContext } from "../DonorContext";

export const GrantDash = () => {
    const { grant } = useContext(DonorContext);
    const navigate = useNavigate();
    const handleGrantDetail = (url) => {
        navigate(url);
    };

    if (!grant) return <Loading>Loading...</Loading>

    const grantsToShow = grant.slide();

    return(
        <Wrapper>
            <Div>
                {grantsToShow.map((grants) => {
                    return(
                        <Grants 
                        key={grants._id}
                        onClick={() => {
                            handleGrantDetail(`/grantdetails/${grants?._id}`);
                        }}
                        >
                            <NameOfGrant>{`${grants.nameOfGrant}`}</NameOfGrant>
                            <GrantBody>{`${grants.grantBody}`}</GrantBody>
                            <GrantAmount>{`${grants.grantAmount}`}</GrantAmount>
                        </Grants>
                    );
                })}
            </Div>
        </Wrapper>
    );

};

const Wrapper = styled.div`
  display: flex;
  font-family: var(--body-font);
  align-items: center;
  flex-direction: column;
  margin: 0px;
  gap: 20px;
  padding: 4em;
  background: linear-gradient(45deg, #bacabe 0%, #bbcffa 90%);
  flex-wrap: wrap;
`;
const Div = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5em;
  gap: 8em;
  flex-grow: 1;
`;

const Grants = styled.button`
  border: none;
  align-self: flex-end;
  border-radius: 1.5em;
  font-family: var(--body-font);
  width: 8em;
  height: 2.8em;
  font-size: 0.9em;
  background-color: crimson;
  color: white;
  position: sticky;
  bottom: 0.2em;
  left: 10em;
  :hover {
    cursor: pointer;
    background: linear-gradient(45deg, #00e6f6 10%, #1f6cab 90%);
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

// const Name = styled.div`
//   display: flex;
//   outline: 0.1rem solid #1f6caa;
//   border-radius: 0.8em;
//   box-shadow: 0.5em 0.5em 3em 0.5em ghostwhite;
//   width: 17em;
//   height: 20em;
//   justify-content: space-between;
//   align-items: center;
//   gap: 5px;
//   flex-direction: column;
//   :hover {
//     cursor: pointer;
//     background: #ffffff;
//     color: #0acaff;
//     transition: 0.5s;
//     transform: scale3d(1.2, 1.2, 1);
//     font-weight: bold;
//   }
// `;

const NameOfGrant = styled.div`
  bottom: 15vh;
  left: 3vw;
  color: #a10a0a;
  padding-top: 1em;
`;

const GrantBody = styled.div`
  bottom: 15vh;
  left: 3vw;
  color: #a10a0a;
  padding-top: 1em;
`;
const GrantAmount = styled.div`
  bottom: 15vh;
  left: 3vw;
  color: #a10a0a;
  padding-top: 1em;
`;

export default GrantDash