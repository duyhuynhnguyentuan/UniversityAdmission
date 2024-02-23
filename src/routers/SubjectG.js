const express = require("express");
const {
    createSubjectG,
    getaSubjectG,
    getAllSubjectG,
    updatedSubjectG,
    deletedCSubjectG,
} = require('../controllers/SubjectGCtrl');
const router = express.Router();


router.post("/", createSubjectG);
router.get("/:id", getaSubjectG);
router.get("/", getAllSubjectG);
router.put("/:id", updatedSubjectG);
router.delete("/:id",deletedCSubjectG);

module.exports = router;
