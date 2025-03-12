const express = require("express");
const router = express.Router();

const { addSchool } = require("../controllers/addSchool");
const { getSchoolsByProximity } = require("../controllers/getSchools");

router.post("/addSchool", addSchool);
router.get("/listSchools", getSchoolsByProximity);

module.exports = router;
