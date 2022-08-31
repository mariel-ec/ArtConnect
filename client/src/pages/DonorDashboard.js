import React, { useState } from "react";
import styled from "styled-components";
import { DonorContext } from "../DonorContext";
import { useContext, useEffect, useParams } from "react";
import DonorDetails from "./DonorDetails";
import { useNavigate, Link } from "react-router-dom";

export const DonorDash = () => {
  const { donor, setDonor } = useContext(DonorContext);
  const [numDonors, setNumDonors] = useState(6);
  const MAXDONORS = 100;
  const navigate = useNavigate();

  //set the maximum number of numbers that can be displayed at once and how many can be added at a time
  const handleClick = () => {
    if (numDonors <= MAXDONORS - 6) {
      setNumDonors(numDonors + 6);
    }
  };
  //set up to navigate to the donor details page
  const handleDonorDetail = (url) => {
    navigate(url);
  };
  //fetch all the donors from mongo
  useEffect(() => {
    fetch("/api/donors")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.data);
        setDonor(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  //if there is no donor info to display, default to loading page
  if (!donor) return <Loading>Loading...</Loading>;

  const donorsToShow = donor.slice(0, numDonors);

  //return includes all of the donors displayed, a button to view more donors and a button to add a new donor
  return (
    <Wrapper>
      <h1>Donors</h1>

      <Link to="/newdonor">
        <ButtonNew>Add a new donor</ButtonNew>
      </Link>
      <Div>
        {donorsToShow.map((donors) => {
          return (
            <Donors
              key={donors._id}
              onClick={() => {
                handleDonorDetail(`/donordetails/${donors?._id}`);
              }}
            >
              <Img src={`${donors.imageSrc}`} />

              <h3>{`${donors.name}`}</h3>
              <h5>{`${donors.city}`}</h5>
            </Donors>
          );
        })}
        <Button onClick={handleClick}>View more donors</Button>
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
`;

const SearchBar = styled.div``;

const Div = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5em;
  gap: 5em;
  flex-grow: 1;
`;

const Img = styled.img`
  max-height: 150px;
  min-height: 150px;
  display: flex;
  border-radius: 50%;
  margin-block: 15% 10%;
`;

const Button = styled.button`
  border: none;
  align-self: flex-end;
  border-radius: 1.5em;
  width: 20em;
  height: 2.8em;
  font-size: 0.9em;
  background-color: #959595;
  color: black;
  position: center;
  bottom: 0.2em;
  left: 10em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
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

  top: 2em;
  left: 23em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;

const Donors = styled.div`
  display: flex;
  border-radius: 0.5em;
  box-shadow: 0.5em 0.5em 0.5em 0.5em lightgrey;
  width: 17em;
  height: 20em;
  justify-content: space-between;
  align-items: center;
  /* gap: 5px; */
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

const Loading = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  margin-top: 15em;
  color: #0acaff;
`;

export default DonorDash;
