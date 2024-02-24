const express = require("express");

const {
    createSchoolYear,
    getaSchoolYear,
    getAllSchoolYear,
    updateSchoolYear,
    deleteSchoolYear,
} = require('../controllers/SchoolYearCtrl')

const router = express.Router();

router.post("/", createSchoolYear);
router.get("/:id", getaSchoolYear);
router.get("/", getAllSchoolYear);
router.put("/:id", updateSchoolYear);
router.delete("/:id", deleteSchoolYear);

module.exports = router;

