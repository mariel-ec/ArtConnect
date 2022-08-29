"use strict";

const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log("MONGO_URI", MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const sendResponse = (res, status, data, message = "No message included") => {
  return res.status(status).json({ status, data, message });
};

//DONORSSSSSS
const getDonors = async (req, res) => {
  console.log("hey");
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const allDonors = await db.collection("Donors").find().toArray();

  allDonors
    ? sendResponse(res, 200, allDonors)
    : sendResponse(res, 404, null, "Donors not found");
  client.close();
};

//ONE DONOR
const getDonorById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const _id = req.params.donorId;
  console.log("id", _id);
  // var o_id = new ObjectId(_id);
  const result = await db.collection("Donors").findOne({ _id: ObjectId(_id) });
  console.log("result", result);

  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "Donor not found");
  client.close();
};

//FUNDRAISERS
const getFundraisers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const allFundraisers = await db.collection("Fundraisers").find().toArray();
  allFundraisers
    ? sendResponse(res, 200, allFundraisers)
    : sendResponse(res, 404, null, "Fundraisers not found");
  client.close();
};

//ONE FUNDRAISER
const getFundraiserById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const _id = req.params.fundraiserId;
  const result = await db
    .collection("Fundraisers")
    .findOne({ _id: ObjectId(_id) });

  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "Fundraiser not found");
  client.close();
};

// /GRANTS
const getGrants = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const allGrants = await db.collection("Grants").find().toArray();

  allGrants
    ? sendResponse(res, 200, allGrants)
    : sendResponse(res, 404, null, "Grants not found");
  client.close();
};

// ONE GRANT
const getGrantById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("ArtConnect");
  const _id = req.params.grantId;
  const result = await db.collection("Grants").findOne({ _id: ObjectId(_id) });
  console.log("result", result);
  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "Grant not found");
  client.close();
};

///UPDATES

const updateGrant = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const { nameOfGrant, 
    grantBody, 
    grantAmount, 
    dueDate, 
    _id 
  } = req.body;
  const query = { _id: ObjectId(_id) };
  const newValues = { $set: { nameOfGrant, 
    grantBody, 
    grantAmount, 
    dueDate } };
  const result = await db.collection("Grants").updateOne(query, newValues);

  console.log(result);
  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "Grant not found");
  client.close();
};

const updateFundraiser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const { nameOfFundraiser,
    dateOfFundraiser,
    locationOfFundraiser,
    coordinator,
    fundraisingGoal,
    totalFundraised,
    _id
  } = req.body;
  const query = { _id: ObjectId(_id) };
  const newValues = { $set:{
    nameOfFundraiser,
dateOfFundraiser,
locationOfFundraiser,
coordinator,
fundraisingGoal,
totalFundraised} };
const result = await db.collection("Grants").updateOne(query, newValues);

console.log(result);
  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "Fundraiser not found");
  client.close();
};

const updateDonor = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  const { 
    name,
    email,
    profession,
    artInterests,
    _id
  } = req.body;
  const query = { _id: ObjectId(_id) };
  const newValues = { $set:{
    name,
    email,
    profession,
    artInterests } };
const result = await db.collection("Donors").updateOne(query, newValues);

console.log(result);
  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "Fundraiser not found");
  client.close();
};


//NEW DONORS,FUNDRAISERS, GRANTS, DONATIONS
const addDonor = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {
    name,
    email,
    profession,
    artInterests,
  } = req.body;
  const newDonor = {
    _id: uuidv4(),
    name,
    email,
    profession,
    artInterests,
  };
  try {
    await client.connect();
    const db = client.db("ArtConnect");
    await db.collection("Donors").insertOne(newDonor);

    res
    .status(201)
    .json({ status: 201, data: newDonor, message: "donor successfully added" });
  } catch (err) {
    rest.status(400).json({ 
      status: 400, message: "Error"
    });
  }
  client.close();
};

const addFundraiser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {
    nameOfFundraiser,
    dateOfFundraiser,
    locationOfFundraiser,
    coordinator,
    fundraisingGoal,
    totalFundraised,
  } = req.body;
  const newFundraiser = {
    _id: uuidv4(),
    nameOfFundraiser,
    dateOfFundraiser,
    locationOfFundraiser,
    coordinator,
    fundraisingGoal,
    totalFundraised,
  };
  try {
    await client.connect();
    const db = client.db("ArtConnect");
    await db.collection("Fundraisers").insertOne(newFundraiser);

    res
    .status(201)
    .json({ status: 201, data: newDonor, message: "fundraiser successfully added" });
  } catch (err) {
    rest.status(400).json({ 
      status: 400, message: "Error"
    });
  }
  client.close();
};

const addGrant = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {
    nameOfGrant, 
    grantBody, 
    grantAmount, 
    dueDate, 
  } = req.body;
  const newGrant = {
    _id: uuidv4(),
    nameOfGrant, 
    grantBody, 
    grantAmount, 
    dueDate, 
  };
  try {
    await client.connect();
    const db = client.db("ArtConnect");
    await db.collection("Grants").insertOne(newGrant);

    res
    .status(201)
    .json({ status: 201, data: newDonor, message: "grant successfully added" });
  } catch (err) {
    rest.status(400).json({ 
      status: 400, message: "Error"
    });
  }
  client.close();
};

const addDonation = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {
    donorName,
    donationDate,
    donationAmount,
  } = req.body;
  const newDonation = {
    _id: uuidv4(),
    donorName,
    donationDate,
    donationEvent 
  };
  try {
    await client.connect();
    const db = client.db("ArtConnect");
    await db.collection("Donations").insertOne(newDonation);

    res
    .status(201)
    .json({ status: 201, data: newDonor, message: "donation successfully added" });
  } catch (err) {
    rest.status(400).json({ 
      status: 400, message: "Error"
    });
  }
  client.close();
};

//DELETE
//Delete donor

const deleteDonorById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params.donorId;

  try{
    await client.connect();
    const db = client.db("ArtConnect");

    const result = await db.collection("Donors").deleteOne({ _id });
    result.deletedCount
      ? res.status(200).json({ status: 200, data: result, message: "donor is deleted" })
      : res.status(404).json({ status: 404, message: "donor not found" });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: "error" });
  }
  client.close();
}

//delete fundraiser 
const deleteFundraiserById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params.fundraiserId;

  try{
    await client.connect();
    const db = client.db("ArtConnect");

    const result = await db.collection("Fundraisers").deleteOne({ _id });
    result.deletedCount
      ? res.status(200).json({ status: 200, data: result, message: "fundraiser is deleted" })
      : res.status(404).json({ status: 404, message: "fundraiser not found" });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: "error" });
  }
  client.close();
}

//delete grant

const deleteGrantById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params.donorId;

  try{
    await client.connect();
    const db = client.db("ArtConnect");

    const result = await db.collection("Grants").deleteOne({ _id });
    result.deletedCount
      ? res.status(200).json({ status: 200, data: result, message: "grant is deleted" })
      : res.status(404).json({ status: 404, message: "grant not found" });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: "error" });
  }
  client.close();
}

//delete donation
const deleteDonationById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params.donorId;

  try{
    await client.connect();
    const db = client.db("ArtConnect");

    const result = await db.collection("Donations").deleteOne({ _id });
    result.deletedCount
      ? res.status(200).json({ status: 200, data: result, message: "donation is deleted" })
      : res.status(404).json({ status: 404, message: "donation not found" });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: "error" });
  }
  client.close();
}


module.exports = {
  getDonors,
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
  deleteDonationById,
  deleteFundraiserById,
  deleteGrantById


};
