import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useContext, useEffect, useParams } from "react";
// import DonorNav from "./components/DonorNav";
import DonorPage from "./pages/DonorDetails";
import HomePage from "./pages/HomePage";
import DonorDashboard from "./pages/DonorDashboard";
import DonorDetails from "./pages/DonorDetails";
import FundraiserDashboard from "./pages/FundraiserDashboard";
import FundraiserDetails from "./pages/FundraiserDetails";
import GrantsDashboard from "./pages/GrantsDashboard";
import GrantDetails from "./pages/GrantDetails";

import DonorContext from "./DonorContext";

const App = () => {
  const { setDonor } = useContext(DonorContext);
  const { setFundraiser } = useContext(DonorContext);
  const { setGrant } = useContext(DonorContext);
  // const { setFundraiser } = useContext()
  // const donorId = useParams().donorId;
  // const { setDonorDetail, donorDetail } = useContext(DonorContext);

  useEffect(() => {
    fetch("/api/get-donors")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.data);
        setDonor(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/api/get-fundraisers")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("data", data.data);
  //     setFundraiser(data.data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch("/api/get-grants")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setGrant(data.data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/donors" element={<DonorDashboard />} />
          <Route
            exact
            path="/donordetails/:donorId"
            element={<DonorDetails />}
          />
          <Route exact path="/fundraisers" element={<FundraiserDashboard />} />
          <Route exact 
          path="/fundraiserdetails/:fundraiserId" 
          element={<FundraiserDetails />} 
          />
          <Route exact path="/grants" element={<GrantsDashboard />} />
          <Route exat path="/grantdetails/:grantId" element={<GrantDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
