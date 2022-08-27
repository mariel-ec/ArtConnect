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

module.exports = {
  getDonors,
  getDonorById,
  getFundraisers,
  getFundraiserById,
  getGrants,
  getGrantById,
};
