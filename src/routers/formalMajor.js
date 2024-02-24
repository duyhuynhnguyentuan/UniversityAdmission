const express = require('express');
const {
    createFormalMajor,
    getAllFormalMajors,
    getFormalMajorById,
    updateFormalMajor,
    deleteFormalMajor
} = require("../controllers/FormalMajor")
const router = express.Router();


router.post('/', createFormalMajor);
router.get('/', getAllFormalMajors);
router.get('/:id', getFormalMajorById);
router.put('/:id', updateFormalMajor);
router.delete('/:id', deleteFormalMajor);

module.exports = router;