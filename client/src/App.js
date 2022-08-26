import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useContext, useEffect, useParams } from "react";
// import DonorNav from "./components/DonorNav";
import DonorPage from "./pages/DonorDetails";
import HomePage from "./pages/HomePage";
import DonorDashboard from "./pages/DonorDashboard";
import DonorDetails from "./pages/DonorDetails";


import DonorContext from "./DonorContext";

const App = () => {
  const { setDonor } = useContext(DonorContext);
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
