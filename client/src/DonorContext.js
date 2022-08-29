import React, { createContext, useState } from "react";
export const DonorContext = createContext(null);

export const DonorProvider = ({ children }) => {
  const [donor, setDonor] = useState([]);
  const [donorDetail, setDonorDetail] = useState("");
  const [donorLoad, setDonorLoad] = useState(false);
  const [fundraiser, setFundraiser] = useState([]);
  const [fundraiserDetail, setFundraiserDetail] = useState("");
  const [grant, setGrant] = useState([]);
  const [grantDetail, setGrantDetail] = useState("");
  const [updateGrant, setUpdateGrant] = useState("");
  const [updateFundraiser, setUpdateFundraiser] = useState("");
  const [updateDonor, setUpdateDonor] = useState("");

  return (
    <DonorContext.Provider
      value={{
        donor,
        setDonor,
        donorDetail,
        setDonorDetail,
        grant,
        setGrant,
        grantDetail,
        setGrantDetail,
        fundraiser,
        setFundraiser,
        setFundraiserDetail,
        fundraiserDetail,
        updateGrant,
        setUpdateGrant,
        updateFundraiser,
        setUpdateFundraiser,
        updateDonor,
        setUpdateDonor,
      }}
    >
      {children}
    </DonorContext.Provider>
  );
};

export default DonorContext;
