const express = require('express');
const router = express.Router();
const {
    getAdmissionMethod
} = require("../controllers/AdmissionMethodCtrl")

router.get('/admissionMethod', getAdmissionMethod)
module.exports = router