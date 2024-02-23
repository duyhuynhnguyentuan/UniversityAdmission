///DuyHNT

const express = require('express');
const {
    createUni_Province,
    getaUni_Province,
    getAllUni_Province,
    updateUni_Province,
    deleteUni_Province,
} = require('../controllers/University_ProvinceCtrl')

const router = express.Router();

router.post("/", createUni_Province);
router.get("/:id", getaUni_Province);
router.get("/", getAllUni_Province);
router.put("/:id", updateUni_Province);
router.delete("/:id", deleteUni_Province);

module.exports = router;