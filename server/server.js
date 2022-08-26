"use Strict";

const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8000;

const { getDonors, getDonorById } = require("./handlers");

app.use(morgan("tiny"));
app.use(express.json());

app.use(express.static("public"));

//Endpoints:
//donors
app.get("/api/donors", getDonors);
app.get("/api/donordetails/:donorId", getDonorById);

//fundraisers
// app.get("/api/get-fundraisers", getFundraisers);
// app.get("/api/get-fundraisers/:fundraisers", getFundraisersById);




app.get("*", (req, res) => {
  res.status(404).json({
    status: 400,
    message: "This is not what you're looking for",
  });
});

app.listen(8000, () => console.log("Listening on port 8000"));
