import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useContext, useEffect, useParams } from "react";
// import DonorNav from "./components/DonorNav";
import Nav from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DonorDashboard from "./pages/DonorDashboard";
import DonorDetails from "./pages/DonorDetails";
import FundraiserDashboard from "./pages/FundraiserDashboard";
import FundraiserDetails from "./pages/FundraiserDetails";
import GrantsDashboard from "./pages/GrantsDashboard";
import GrantDetails from "./pages/GrantDetails";
import GrantForm from "./pages/GrantForm";
import FundraiserForm from "./pages/FundraiserForm";
import DonorForm from "./pages/FundraiserForm";
import NewDonation from "./pages/NewDonation";
import NewDonor from "./pages/NewDonor";
import NewFundraiser from "./pages/NewFundraiser";
import NewGrant from "./pages/NewGrant";


import DonorContext from "./DonorContext";

const App = () => {
  const { setDonor } = useContext(DonorContext);
  // const donorId = useParams().donorId;
  // const { setDonorDetail, donorDetail } = useContext(DonorContext);

  const { setFundraiser } = useContext(DonorContext);
  // const { setGrant } = useContext(DonorContext);
  // const { setFundraiser } = useContext()

  

  



  return (
    <div className="app">
       <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          
          <Route exact path="/donors" element={<DonorDashboard />} />
          <Route exact path="/donordetails/:donorId" element={<DonorDetails />} />
          <Route exact path="/donorform" element={<DonorForm />} />
          <Route exact path="/newdonor" element={<NewDonor />} />
          <Route exact path="/fundraisers" element={<FundraiserDashboard />} />
          <Route exact path="/fundraiserdetails/:fundraiserId" element={<FundraiserDetails />} />
          {/* <Route exact path="/newfundraiser" element={<NewFundraiser />} /> */}
          <Route eact path="/fundraiserform" element={<FundraiserForm />} />
          {/* <Route exact path="/newdonation" element={<NewDonation />} /> */}
          <Route exact path="/grants" element={<GrantsDashboard />} />
          <Route exact path="/grantdetails/:grantId" element={<GrantDetails />} />
          <Route exact path ="/grantform" element={<GrantForm />} />
          {/* <Route exact path="/newgrant" element={<NewGrant />} /> */}
         
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
