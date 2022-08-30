import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const GrantDetails = () => {
  const grantId = useParams().grantId;
  const navigate = useNavigate();
  const { setGrantDetail, grantDetail } = useContext(DonorContext);


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
        }, 2000)
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

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

  return (
    <>
      <Wrapper>
        <Grant key={grantDetail.o_id}>
          <ul>
          <NameOfGrant>{`${
            grantDetail.nameOfGrant ? grantDetail.name : ""
            }`}</NameOfGrant>
          <GrantBody>{`${
            grantDetail.grantBody ? grantDetail.grantBody : ""
            }`}</GrantBody>
          <GrantAmount>{`${
            grantDetail.grantAmount ? grantDetail.grantAmount : ""
            }`}</GrantAmount>
          <GrantDate>{`${
            grantDetail.dueDate ? grantDetail.dueDate : ""
            }`}
            </GrantDate> 
            <Button
              onClick={() => {
                navigate(`/grantdetails/${grantId}/grantform`);;
              }}
              > Edit </Button>
              <Button onClick={deleteHandler}> Delete Grant </Button>
          </ul>
        </Grant>
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

const Grant = styled.div`
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
const NameOfGrant = styled.div`
  font-size: 14px;
  color: darkblue;
`;

const GrantBody = styled.div`
  font-size: 14px;
  color: darkblue;
`;

const GrantAmount = styled.div`
  font-size: 14px;
  color: darkblue;
`;
const GrantDate = styled.div`
  font-size: 14px;
  color: darkblue;
`;

export default GrantDetails;
