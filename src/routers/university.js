const express = require('express');
const {
    createUniversity,
    getaUniversity,
    getAllUniversities,
    updateUniversity,
    deleteUniversity,
} = require('../controllers/UniversityCtrl');
const router = express.Router();

router.post("/", createUniversity);
router.get("/:id", getaUniversity);
router.get("/", getAllUniversities);
router.put("/:id", updateUniversity);
router.delete("/:id", deleteUniversity);

module.exports = router;