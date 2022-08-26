import React, { createContext, useEffect, useState } from "react";
export const DonorContext = createContext(null);

export const DonorProvider = ({ children }) => {
  const [donor, setDonor] = useState([]);
  const [donorDetail, setDonorDetail] = useState("");
  const [donorLoad, setDonorLoad] = useState(false);



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
