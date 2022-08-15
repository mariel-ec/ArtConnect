import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import React from "react";
import DonorNav from "./components/DonorNav";
import DonorPage from "./pages/DonorPage";
import HomePage from "./pages/HomePage";
import DonorDashboard from "./pages/DonorDashboard";
import DonorReports from "./pages/DonorReports";



const App = () => {
  return (
    <div className="app">
      {/* <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dashboard" element={<DonorDashboard />} />
        <Route exact path="/dashboard/donor" element={<DonorPage />} />
        <Route exact path="/dashboard/donor/:id" element={<DonorPage editMode={true} />} />
      </Routes>      
      </BrowserRouter> */}

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
        <DonorNav />
      <Routes>
          <Route exact path="/donordash" element={<DonorDashboard />} />
          <Route exact path="/donor" element={<DonorPage />} />
          <Route exact path="/donor/:id" element={<DonorPage editMode={true} />} />
          <Route exact path="/dreport" element={<DonorReports />} />
      </Routes>
        {/* <FundNav />
        <Routes>
          <Route exact path="/funddash" element={<FundDashboard />} />
          <Route exact path="/fundraiser" element={<FundraiserPage />} />
          <Route exact path="/fundraiser/:id" element={<FundraiserPage editMode={true} />} />
          <Route exact path="freport" element={<FundReport />} />
        </Routes>
       */}
      </BrowserRouter>



    </div>  
    )
};

export default App;


