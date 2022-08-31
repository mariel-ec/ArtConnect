import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const DonorDetails = () => {
  // const [count, setCount] = useState(0);

  const donorId = useParams().donorId;
  const navigate = useNavigate();
  // const o_id = useParams().o_id;
  const { setDonorDetail, donorDetail } = useContext(DonorContext);

  // const handleSelect = (e) => {
  //   setCount(e.target.value);
  // };
  //  fetch(`api/donors/${donorId}`)
  //

  const deleteHandler = () => {
    fetch(`/api/deletedonor/${donorId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          window.alert("Donor deleted !");
          setTimeout(() => {
            navigate("/donors");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`/api/donordetails/${donorId}`)
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

          <ProfilePic>
            <Img src={`${donorDetail.imageSrc}`} />
          </ProfilePic>

          <TextArea>
            <ul>
              <ProfileName>{`${
                donorDetail.name ? donorDetail.name : ""
              }`}</ProfileName>
              <Email>
                Email: {`${donorDetail.email ? donorDetail.email : ""}`}
              </Email>
              <City>
                Location: {`${donorDetail.city ? donorDetail.city : ""}`}
              </City>
              <Profession>
                Profession: {`${donorDetail.profession ? donorDetail.profession : ""}`}
              </Profession>
              <ArtInterest>
                Area of Interest:
                {`${donorDetail.artInterest ? donorDetail.artInterest : ""}`}
              </ArtInterest>
              <FundraiserAttended>
                Last FundraiserAttended:
                {`${
                  donorDetail.fundraiserAttended
                    ? donorDetail.fundraiserAttended
                    : ""
                }`}
              </FundraiserAttended>
              <DonationAmount>
                Last Donation made on:{" "}
                {`${donorDetail.donationDate ? donorDetail.donationDate : ""}`}:
                $
                {`${
                  donorDetail.donationAmount ? donorDetail.donationAmount : ""
                }`}
              </DonationAmount>
              <Button
                onClick={() => {
                  navigate(`/donordetails/${donorId}/donorform`);
                }}
              >
                Edit
              </Button>
              
              <Button onClick={deleteHandler}>Delete</Button>
            </ul>
          </TextArea>
        </Donors>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* font-family: var(--body-font); */
  align-items: center;
  flex-direction: column;
  justify-items: center;
  /* margin-left: 30em;
  margin-top: 1em; */
  /* width: 50em; */
  padding: 4.5em;

  flex-wrap: wrap;
  background-color: #f7f5ed;

  /* flex-wrap: wrap; */
`;
const ProfilePic = styled.div`
  display: relative;
  float: left;
  padding-top: 20px;
  border-radius: 50%;
`;
const Img = styled.img`
  max-height: 250px;
  min-height: 250px;
  border-radius: 50%;
`;

const TextArea = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5em;
  gap: 5em;
  flex-grow: 1;
`;

// const Address = styled.div`
//   display: flex;
//   position: relative;
//   left: 5em;
//   bottom: 1.7em;
// `;

const Button = styled.button`

  border: none;
  align-self: flex-end;
  border-radius: 1.5em;
  width: 20em;
  height: 2.8em;
  font-size: 0.9em;
  background-color: #959595;
  color: black;
  position: relative;
  margin-bottom: 1em;
  top: 3em;
  bottom: 0em;
  left: 0em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;
const ProfileName = styled.div`
  font-size: 18px;
  color: black;

`;

const City = styled.div`
  font-size: 14px;
  color: black;
`;
const Email = styled.div`
  font-size: 14px;
  color: beige;
`;

const ArtInterest = styled.div`
  font-size: 14px;
  color: black;
`;

const FundraiserAttended = styled.div`
  font-size: 14px;
  color: black
`;

const DonationAmount = styled.div`
  font-size: 14px;
  color: black
`;
const Profession = styled.div`
 font-size: 14px;
  color: black;
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
