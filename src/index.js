const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const dbConnect = require('./config/database');
const studyprofile = require('./routers/studyProfile');

dbConnect();
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json());

app.use("/api/v1/studyprofile", studyprofile);


app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
