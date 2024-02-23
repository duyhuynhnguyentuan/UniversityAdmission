const express = require("express");
const {
  newStudyProfile,
  getaStudyProfile,
  getAllStudyProfile,
  updatedStudyProfile,
  deletedStudyProfile,
} = require('../controllers/studyProfileCtrl');
const router = express.Router();


router.post("/", newStudyProfile);
router.get("/:id", getaStudyProfile);
router.get("/", getAllStudyProfile);
router.put("/:id", updatedStudyProfile);
router.delete("/:id",deletedStudyProfile);

module.exports = router;
