import React, { createContext, useEffect, useState } from "react";
export const DonorContext = createContext(null);

export const DonorProvider = ({ children }) => {
  const [donor, setDonor] = useState([]);
  const [donorDetail, setDonorDetail] = useState("");
  const [donorLoad, setDonorLoad] = useState(false);

  //fetch items for Donor Dashboard

  return (
    <DonorContext.Provider
      value={{
        donor,
        setDonor,
        donorDetail,
        setDonorDetail,
      }}
    >
      {children}
    </DonorContext.Provider>
  );
};

export default DonorContext;
