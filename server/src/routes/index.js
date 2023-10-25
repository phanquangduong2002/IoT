const express = require("express");
const {
  findAllData,
  findAllDataControl,
} = require("../controllers/data.controller");

const router = express.Router();

router.post("/data", findAllData);

router.post("/control", findAllDataControl);

module.exports = router;
