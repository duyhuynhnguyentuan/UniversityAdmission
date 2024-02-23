///DuyHNT

const express = require('express');

const {
    createProvince,
    getaProvince,
    getAllProvince,
    updatedProvince,
    deleteProvince,
} = require('../controllers/ProvinceCtrl')

const router = express.Router();

router.post("/", createProvince);
router.get("/:id", getaProvince);
router.get("/", getAllProvince);
router.put("/:id", updatedProvince);
router.delete("/:id", deleteProvince);

module.exports = router;