"use strict";

const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const {
    getDonors,
    getDonorById,
    addNewDonor,
    updateDonor,
    deleteDonor
} = require("./Handlers/DonorHandlers")

const {
    getFundraisers,
    getFundraiserById,
    addNewFundraiser,
    updateFundraiser,
    deleteFundraiser
} = require("./Handlers/FundraiserHandlers")

const PORT = 8000;

express()

.use(function(req, res, next) {
    res.header(
        'Acess-Control-Allow-Methods',
        'OPTIONS, HEAD, GET, PUT, POST DELETE'
    );
    res.header(
        'Acess-Control-Allows-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
    }
)

  .use(morgan("tiny"))
  .use(express.static(public))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //Endpoints.
  
//DO I NEED THIS?
  .use(require("./routes/Donors"))
  .use(require("/routes/fundraisers"))

.get('/', (req, res) => {
    res.status(200).json({status: 200, message: "Yo!"})
})

//Donor Endpoints
.get('/api/Donors', getDonors)
.get('/api/Donors/:DonorId', getDonorById)
.post('/api/Donors', addNewDonor)
.patch('/api/Donors', updateDonor)
.delete('/api/Donors', deleteDonor)

//Fundraiser Endpoints
.get('api/Fundraisers', getFundraisers)
.get('api/Fundraisers/:FundraiserId', getFundraiserById)
.post('/api/Fundraisers', addNewFundraiser)
.patch('/api/Fundraisers', updateFundraiser)
.delete('/api/Fundraisers', deleteFundraiser)



  .listen(PORT, () => console.ingo(`Listening on port ${PORT}`));
