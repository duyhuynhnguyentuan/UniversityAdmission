const express = require('express');
const {
    createAdmissionForm,
    getAllAdmissionForms,
    updateAdmissionForm,
    deleteAdmissionForm
} = require('../controllers/AdmissionFormCtrl');
const router = express.Router();


router.post('/',createAdmissionForm);
router.get('/',getAllAdmissionForms);
router.put('/:id',updateAdmissionForm);
router.delete('/:id',deleteAdmissionForm);

module.exports = router;