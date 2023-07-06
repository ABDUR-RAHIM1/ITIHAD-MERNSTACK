const { getDonation, createDonation, getUniqueDonation } = require("../Controllers/donation.controller");

const router = require("express").Router();
 
router.get("/", getDonation)
router.post("/donar", getUniqueDonation)
router.post("/", createDonation) 


module.exports = router