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

  return (
    <DonorContext.Provider
      value={{
        donor,
        setDonor,
        donorDetail,
        setDonorDetail,
        grant,
        setGrant,
        fundraiser,
        setFundraiser,
      }}
    >
      {children}
    </DonorContext.Provider>
  );
};

export default DonorContext;
