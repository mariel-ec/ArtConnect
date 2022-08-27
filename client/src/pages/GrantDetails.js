import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DonorContext from "../DonorContext";

const GrantDetails = () => {
  const grantId = useParams().grantId;
  const { setGrantDetail, grantDetail } = useContext(DonorContext);

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
          <NameOfGrant>{`${grantDetail.nameOfGrant}`}</NameOfGrant>
          <GrantBody>{`${grantDetail.grantBody}`}</GrantBody>
          <GrantAmount>{`${grantDetail.grantAmount}`}</GrantAmount>
        </Grant>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-family: var(--body-font);
  align-items: center;
  flex-direction: column;
  justify-items: center;
  margin-left: 30em;
  margin-top: 1em;
  width: 50em;
  padding: 4.5em;
  background: linear-gradient(45deg, #bacabe 0%, #bbcffa 90%);
  flex-wrap: wrap;
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

export default GrantDetails;
