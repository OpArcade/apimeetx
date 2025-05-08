const express = require("express");
const { ashish_getActivities } = require("../controllers/activityController");

const router = express.Router();

router.get("/", ashish_getActivities); // public

module.exports = router;
