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
  const _id = req.params.donor;
  var o_id = new ObjectId(_id);
  const result = await db.collection("Donors").findOne({ _id: o_id });
  console.log(result);

  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "Donor not found");
  client.close();
};

module.exports = { getDonors, getDonorById };
