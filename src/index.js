
const express = require('express');
const app = express();
const port = 8000;
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const dbConnect = require('./config/mongoose');
const admissionFormRouter = require('./routers/admissionForm')
const admissionMethodRouter = require('./routers/admissionMethod')

dbConnect();
app.use(morgan('dev'))
app.use(express.json())
app.use("/api/v1/admissonmethod", admissionMethodRouter);
app.use(admissionFormRouter)


app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
