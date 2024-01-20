const express = require('express');
const AdmissionMethod = require('../model/admissionMethod');
const router = new express.Router();

router.get('/admissionMethod', async (req, res) => {
    try {
        const admissionMethod = AdmissionMethod.find({})
        res.send(admissionMethod)
    } catch (error) {
        res.status(500).send(error)
    }
})  
module.exports = router