
const express = require('express');
const app = express()
const admissionFormRouter = require('./routers/admissionForm')
const admissionMethod = require('./routers/admissionMethod')

const port = process.env.PORT || 9000;
app.use(express.json())
app.use(admissionFormRouter)
app.use(admissionMethod)
app.listen(port, () => {
    console.log("Server in running on port " + port)
})