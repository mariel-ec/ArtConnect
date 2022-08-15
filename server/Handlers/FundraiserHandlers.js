const { MongoClient } = require("mongodb");

const { STRINGS } = require("../Constants");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const sendResponse = (res, status, data, message ="No message included") => {
    return res.status(status.json({ status, data, message }));
};


const getFundraisers = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("ArtConnect");
    const allFundraisers = await db.collection("Fundraisers").find().toArray();

    allFundraisers 
    ? sendResponse(res, 200, allFundraisers)
    : sendResponse(res, 404, null, "No fundraisers found");
};

const getFundraiserById = async (req, res) => {
    const client = new MongoClient(MONGO_URI, otpions);
    await client.connect();
    const db = client.db("ArtConnect");
    const _id = req.params.Fundraiser;

    const result = await db.collection("Fundraisers").findOne({_id: ObjectId(_id)});
    result ? sendResponse(res, 200, result) : sendResponse(res, 404, null, "Fundraiser not found");
    
    client.close()
};

const addNewFundraiser = {

}

const updateFundraiser = {

}

const deleteFundraiser = {

}

module.exports = { getFundraisers, getFundraiserById, addNewFundraiser, updateFundraiser, deleteFundraiser };