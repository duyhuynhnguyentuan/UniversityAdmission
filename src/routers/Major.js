const express = require('express');
const {
    createMajor,
    getAllMajors,
    getMajorById,
    updateMajor,
    deleteMajor
} = require("../controllers/Major")
const router = express.Router();


router.post('/', createMajor);
router.get('/', getAllMajors);
router.get('/:id', getMajorById);
router.put('/:id', updateMajor);
router.delete('/:id', deleteMajor);

module.exports = router;