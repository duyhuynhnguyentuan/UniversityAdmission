const express = require('express')
const AdmissionForm = require('../models/admissionForm')

const router = new express.Router()

//Fetch all admission form
router.get('/admissionForm', async (req, res) => {
    try {
        const admissionForm = await AdmissionForm.find({})
        res.send(admissionForm)
    } catch (error) {
        res.status(500).send(error)
    }
}
)

module.exports = router