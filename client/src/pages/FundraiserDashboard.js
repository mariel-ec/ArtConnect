import React, { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { DonorContext } from "../DonorContext";
import Nav from "../components/NavBar";
import FundLogo from "../images/dummyprofilepic/FundLogo.png"
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
      <h1>Fundraisers</h1>
      <Link to="/newfundraiser">
      <ButtonNew>Add a new fundraiser</ButtonNew></Link>
      
      
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
              
              <DetailDiv>
              <Img src={FundLogo} />
              <NameOfFundraiser>{`${fundraisers.nameOfFundraiser}`}</NameOfFundraiser>
              <Coordinator>{`${fundraisers.coordinator}`}</Coordinator>
              <LocationDate>{`${fundraisers.locationOfFundraiser}`}, {`${fundraisers.dateOfFundraiser}`}</LocationDate>
              </DetailDiv>
            </Fundraisers>
            
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
  margin: 0%;
  padding: 0%:
  gap: 10px;
  padding: 4em;
  flex-wrap: wrap;
  background-color: #f7f5ed;
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
`

const Fundraisers = styled.div`
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

const Img = styled.img`
position: left;
max-height: 50px;
padding-left: 10vh;
padding-right: 10vh;


`
const NameOfFundraiser = styled.div`
  bottom: 15vh;
  padding-left: 5vh;
  padding-right: 5vh;
  color: #a10a0a;
  padding-top: 1em;
`;

const LocationDate = styled.div`
  bottom: 15vh;
  padding-left: 5vh;
  padding-right: 5vh;
  color: #a10a0a;
  padding-top: 1em;
`

const Coordinator = styled.div`
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
`

const ButtonDon = styled.button`
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
`

const Loading = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  margin-top: 15em;
  color: #0acaff;
`;

export default FundraiserDash;
