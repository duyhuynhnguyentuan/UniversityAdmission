const express = require("express");
const router = express.Router();
const {
  createMainSubject,
  getAllMainsubject,
  getMainSubject,
  deleteMainSubject,
  updateMainSubject
} = require('../controllers/MainSubjectCtrl')
router.post("/", createMainSubject)
router.get("/", getAllMainsubject)
router.get("/:id", getMainSubject)
router.delete("/:id", deleteMainSubject)
router.put("/:id", updateMainSubject)
module.exports = router