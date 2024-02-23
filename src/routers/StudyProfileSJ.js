const express = require("express");
const {
    createStudyProfileSJ,
    getaStudyProfileSJ,
    getAllStudyProfileSJ,
    uploadXLSX
} = require('../controllers/StudyProfileSJCtrl');
const router = express.Router();
const upload = require('../utils/upload')

router.post("/", createStudyProfileSJ);
router.get("/:id", getaStudyProfileSJ);
router.get("/", getAllStudyProfileSJ);
router.post("/upload", upload.single("xlsx"), uploadXLSX);

module.exports = router;
