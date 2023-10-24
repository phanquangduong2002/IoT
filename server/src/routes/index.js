const express = require("express");
const { findAllData } = require("../controllers/data.controller");

const router = express.Router();

router.post("/data", findAllData);

module.exports = router;
