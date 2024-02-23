const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const dbConnect = require('./config/database');
const studyprofile = require('./routers/studyProfile');
const studyprofileSJ = require('./routers/StudyProfileSJ');
const mJP = require('./routers/MajorInPlanSJG');


dbConnect();
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json());

app.use("/api/v1/studyprofile", studyprofile);
app.use("/api/v1/studyprofileSJ", studyprofileSJ);
app.use("/api/v1/mJP", mJP);



app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
