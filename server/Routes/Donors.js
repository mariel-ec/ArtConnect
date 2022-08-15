const router = require("express").Router();

const { STRINGS } = require("../Constants");

const { getDonors, getDonorByID } = require("../Handlers/DonorHandlers");

router.get(STRINGS.endpoints.Donors, getDonors);

router.get(STRINGS.endpoints.Donors_id, getDonorsById);

router.get(STRINGS.endpoints.Donors_ObjectId(_id), getDonorsById);
module.exports = router;