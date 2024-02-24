const express = require('express');
const {
    createAdmissionMethod,
    getAllAdmissionMethods,
    getAdmissionMethodById,
    updateAdmissionMethod,
    deleteAdmissionMethod
} = require("../controllers/AdmissionMethodCtrl");
const router = express.Router();


router.post('/', createAdmissionMethod);
router.get('/',getAllAdmissionMethods);
router.put('/:id',updateAdmissionMethod);
router.delete('/:id',deleteAdmissionMethod);

module.exports = router;