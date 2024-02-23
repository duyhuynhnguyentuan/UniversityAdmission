const express = require("express");
const {
    createSubject,
    getaSubject,
    getAllSubject,
    updatedSubject,
    deletedCSubject,
} = require('../controllers/SubjectCtrl');
const router = express.Router();


router.post("/", createSubject);
router.get("/:id", getaSubject);
router.get("/", getAllSubject);
router.put("/:id", updatedSubject);
router.delete("/:id",deletedCSubject);

module.exports = router;
