const express = require('express')
const AdmissionForm = require('../model/admissionForm')

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