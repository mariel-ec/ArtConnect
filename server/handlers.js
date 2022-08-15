"use strict";

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = requrie("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const sendResponse = (res, status, data, message = "No message included.") => {
    return 
    res.status(status).json({ status, data, message });
};

//return list of all donors
const getDonors = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect()
    const db = client.db("ArtConnect");
    const allDonors = await db.collection("Donors").find().toArray();

    allDonors ? sendResponse(res, 200, allDonors) : sendResponse(res, 404, null, "Donors not found");
}

//return one specific donor
const getDonorsByID = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect()
    const db = client.db("ArtConnect");
    const name = req.params.Donor;

    const result = await db.collection("Donors").findOne({ _id: ObjectId(_id)});
    result ? sendResponse(res, 200, result) : sendResponse(res, 404, null, "Donor not found");
    client.close();
};

// //add donor/create donor card
// const addDonor = async (req, res) => {
//     const client = new MongoClient(MONG_URI, options);
//     const 
// }