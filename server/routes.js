import express from "express";

import { getDonors, getDonorById } from "./handlers";

const router = express.Router();

router.get("/donors", getDonors);
router.get("/donors/:_id", getDonorById);

module.exports = router;
