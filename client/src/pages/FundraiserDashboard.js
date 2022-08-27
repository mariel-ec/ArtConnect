import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DonorContext } from "../DonorContext";
// import FundraiserDetailrs from "./FundraiserDetails";

export const FundraiserDash = () => {
  const { fundraiser, setFundraiser } = useContext(DonorContext);

  const navigate = useNavigate();

  const handleFundraiserDetail = (url) => {
    navigate(url);
  };

  useEffect(() => {
    fetch("/api/fundraisers")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.data);
        setFundraiser(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (!fundraiser) return <Loading>Loading...</Loading>;

  // const fundraisersToShow = fundraiser.slice();

  return (
    <Wrapper>
      <Div>
        {fundraiser.map((fundraisers) => {
          return (
            <Fundraisers
              key={fundraisers._id}
              onClick={() => {
                handleFundraiserDetail(
                  `/fundraiserdetails/${fundraisers?._id}`
                );
              }}
            >
              <NameOfFundraiser>{`${fundraisers.nameOfFundraiser}`}</NameOfFundraiser>
              <Coordinator>{`${fundraisers.coordinator}`}</Coordinator>
            </Fundraisers>
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

const Button = styled.button`
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

const Fundraisers = styled.div`
  display: flex;
  outline: 0.1rem solid #1f6caa;
  border-radius: 0.8em;
  box-shadow: 0.5em 0.5em 3em 0.5em ghostwhite;
  width: 17em;
  height: 20em;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  :hover {
    cursor: pointer;
    background: #ffffff;
    color: #0acaff;
    transition: 0.5s;
    transform: scale3d(1.2, 1.2, 1);
    font-weight: bold;
  }
`;

const NameOfFundraiser = styled.div`
  bottom: 15vh;
  left: 3vw;
  color: #a10a0a;
  padding-top: 1em;
`;

const Coordinator = styled.div`
  bottom: 15vh;
  left: 3vw;
  color: #a10a0a;
  padding-top: 1em;
`;

const Loading = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  margin-top: 15em;
  color: #0acaff;
`;

export default FundraiserDash;
