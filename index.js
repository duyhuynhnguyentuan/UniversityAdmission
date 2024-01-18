const express = require('express');
const { AdmissionForm } = require('./src/model/admissionFormModel');

require('./db/mongoose')
const app = express()

const port = process.env.PORT || 3000;
app.use(express.json())
app.use(AdmissionForm)

app.listen(port, () => {
    console.log("Server in running on port " + port)
})