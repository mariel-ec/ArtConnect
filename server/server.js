"use Strict";

const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8000;

const { getDonors, 
  getDonorById, 
  getFundraisers, 
  getFundraiserById, 
  getGrants, 
  getGrantById, 
  updateGrant, 
  updateFundraiser,
  updateDonor,
  addDonor,
  addFundraiser, 
  addGrant,
  addDonation,
  deleteDonorById,
  deleteFundraiserById,
  deleteGrantById,
  deleteDonationById,

} = require("./handlers");


app.use(morgan("tiny"));
app.use(express.json());

app.use(express.static("public"));

//Endpoints:
//donors
app.get("/api/donors", getDonors);
app.get("/api/donordetails/:donorId", getDonorById);
app.patch("/updatedonor", updateDonor);
app.post("/api/newdonor", addDonor);
app.delete("/api/deletedonor/:donorId", deleteDonorById);

//fundraisers
app.get("/api/fundraisers", getFundraisers);
app.get("/api/fundraiserdetails/:fundraiserId", getFundraiserById);
app.patch("/api/updatefundraiser", updateFundraiser);
app.post("/api/newfundraiser", addFundraiser);
app.delete("/api/deletefundraiser/:fundraiserId", deleteFundraiserById);


//grants
app.get("/api/grants", getGrants);
app.get("/api/grantdetails/:grantId", getGrantById);
app.patch("/api/updategrant", updateGrant);
app.post("/api/newgrant", addGrant);
app.delete("/api/deletegrant", deleteGrantById);

//donations
app.post("/api/newdonation", addDonation);
app.delete("/api/deletedonation/:donationId", deleteDonationById);





app.get("*", (req, res) => {
  res.status(404).json({
    status: 400,
    message: "This is not what you're looking for",
  });
});

app.listen(8000, () => console.log("Listening on port 8000"));
