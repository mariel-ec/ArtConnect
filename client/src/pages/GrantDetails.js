import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";
import GRANTSLOGO from "../images/GRANTSLOGO.png";

const GrantDetails = () => {
  const grantId = useParams().grantId;
  const navigate = useNavigate();
  const { setGrantDetail, grantDetail } = useContext(DonorContext);

  //send any deleted information to mongoDB
  const deleteHandler = () => {
    fetch(`/api/deletegrant/${grantId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          window.alert("Grant deleted!");
          setTimeout(() => {
            navigate("/grants");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //fetch the specific details of the grant selected on the dashboard
  useEffect(() => {
    fetch(`/api/grantdetails/${grantId}`)
      .then((res) => res.json())
      .then((data) => {
        setGrantDetail(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [grantId]);

  if (!grantDetail) {
    return <div>loading...</div>;
  }
  //return includes the specific details of the selected grant, button to edit information and delete the grant card
  return (
    <>
      <Wrapper>
        <Grant key={grantDetail.o_id}>
          <ul>
            <Img src={GRANTSLOGO} />
            <NameOfGrant>
              Grant Name:{" "}
              {`${grantDetail.nameOfGrant ? grantDetail.nameOfGrant : ""}`}
            </NameOfGrant>
            <GrantBody>
              {" "}
              Granting Body:{" "}
              {`${grantDetail.grantBody ? grantDetail.grantBody : ""}`}
            </GrantBody>
            <GrantAmount>
              Amount of Grant:{" "}
              {`${grantDetail.grantAmount ? grantDetail.grantAmount : ""}`}
            </GrantAmount>
            <GrantDate>
              Grant Deadline:{" "}
              {`${grantDetail.dueDate ? grantDetail.dueDate : ""}`}
            </GrantDate>
            <Button
              onClick={() => {
                navigate(`/grantdetails/${grantId}/grantform`);
              }}
            >
              {" "}
              Edit{" "}
            </Button>
            <Button onClick={deleteHandler}> Delete Grant </Button>
          </ul>
        </Grant>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-items: center;

  padding: 4.5em;

  flex-wrap: wrap;
  background-color: #f7f5ed;
`;

const Grant = styled.div`
  display: flex;
  outline: 0.1rem solid #1f6caa;
  border-radius: 0.8em;
  box-shadow: 0.5em 0.5em 3em 0.5em ghostwhite;
  width: 25em;
  height: 30em;
  justify-content: space-between;
  align-items: center;
  margin-left: 5em;
  flex-direction: column;
`;

const Img = styled.img`
  max-height: 250px;
  display: flex;
  margin-left: 70px;
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
  position: relative;
  top: 2em;

  left: 4.3em;
  margin-bottom: 1em;
  :hover {
    cursor: pointer;
    background: #aaaaaa;
    color: black;
    transform: scale(1.08);
    transition: 0.3s;
  }
`;
const NameOfGrant = styled.div`
  margin-left: 65px;
  font-size: 18px;
  color: black;
`;

const GrantBody = styled.div`
  margin-left: 65px;
  font-size: 18px;
  color: black;
`;

const GrantAmount = styled.div`
  margin-left: 65px;
  font-size: 18px;
  color: black;
`;
const GrantDate = styled.div`
  margin-left: 65px;
  font-size: 18px;
  color: black;
`;

export default GrantDetails;
