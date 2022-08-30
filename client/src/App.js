import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useContext, useEffect, useParams } from "react";
// import DonorNav from "./components/DonorNav";
import Nav from "./components/NavBar";
import HomePage from "./pages/HomePage";

import DonorDashboard from "./pages/DonorDashboard"
import DonorDetails from "./pages/DonorDetails"
import UpdateDonor from "./pages/DonorForm"
import NewDonor from "./pages/DonorForm"

import FundraiserDashboard from "./pages/FundraiserDashboard";
import FundraiserDetails from "./pages/FundraiserDetails";
import UpdateFundraiser from "./pages/FundraiserForm";
import NewFundraiser from "./pages/NewFundraiser";

import GrantDashboard from "./pages/GrantDashboard";
import GrantDetails from "./pages/GrantDetails";
import UpdateGrant from "./pages/GrantForm";
import NewGrant from "./pages/NewGrant";

import DonorContext from "./DonorContext";

const App = () => {
  const { setDonor } = useContext(DonorContext);

  console.log("here", window.location);
  // const donorId = useParams().donorId;
  // const { setDonorDetail, donorDetail } = useContext(DonorContext);

  const { setFundraiser } = useContext(DonorContext);
  // const { setGrant } = useContext(DonorContext);
  // const { setFundraiser } = useContext()

  return (
    <div className="app">
      <BrowserRouter>
        {window.location.pathname !== "/" && <Nav />}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/donors" element={<DonorDashboard />} />
          <Route
            exact
            path="/donordetails/:donorId"
            element={<DonorDetails />}
          />
          <Route
            exact
            path="/donordetails/:donorId/donorform"
            element={<UpdateDonor />}
          />
          <Route exact path="/newdonor" element={<NewDonor />} />
          <Route exact path="/fundraisers" element={<FundraiserDashboard />} />
          <Route
            exact
            path="/fundraiserdetails/:fundraiserId"
            element={<FundraiserDetails />}
          />
          <Route
            exact
            path="/fundraiserdetails/:fundraiserId/fundraiserform"
            element={<UpdateFundraiser />}
          />
          <Route exact path="/newfundraiser" element={<NewFundraiser />} /> */
          <Route exact path="/grants" element={<GrantDashboard />} />
          <Route
            exact
            path="/grantdetails/:grantId"
            element={<GrantDetails />}
          />
          <Route
            exact
            path="/grantdetails/:grantId/grantform"
            element={<UpdateGrant />}
          />
          <Route exact path="/newgrant" element={<NewGrant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
