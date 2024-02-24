const express = require("express");
const router = express.Router();
const {
  createHighSchool,
  getAllHighSchool,
  getHighSchool,
  deleteHighSchool,
  updateHighSchool
} = require('../controllers/HighSchoolCtrl')
router.post("/", createHighSchool)
router.get("/", getAllHighSchool)
router.get("/:id", getHighSchool)
router.delete("/:id", deleteHighSchool)
router.put("/:id", updateHighSchool)
module.exports = router