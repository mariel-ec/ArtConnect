const { MongoClient } = require("mongodb");



require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const Donors = require("./data/Donorsdb.json");
const Fundraisers = require("./Data/Fundraisersdb.json");

const importData = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("ArtConnect");
  await db.collection("Fundraisers").insertMany(Fundraisers);

  client.close();
};

importData("importData");
