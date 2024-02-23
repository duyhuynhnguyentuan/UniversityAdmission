const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const dbConnect = require('./config/database');
const highSchoolRouter = require('./routers/highSchool')
const mainSubjectRouter = require('./routers/mainSubject')
const certificateRouter = require("./routers/certificate")
const certificateTypeRouter = require("./routers/certificateType")
const studyprofile = require('./routers/studyProfile');
const studyprofileSJ = require('./routers/StudyProfileSJ');
const mJP = require('./routers/MajorInPlanSJG');
const subject = require('./routers/Subject');
const subjectG = require('./routers/Subject');


dbConnect();
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json());

app.use("/api/v1/studyprofile", studyprofile);
app.use("/api/v1/studyprofileSJ", studyprofileSJ);
app.use("/api/v1/mJP", mJP);
app.use("/api/v1/subject", subject);
app.use("/api/v1/subjectg", subjectG);


app.use("/api/v1/highSchool", highSchoolRouter)
app.use("/api/v1/mainSubject", mainSubjectRouter)
app.use("/api/v1/certificate", certificateRouter)
app.use("/api/v1/certificateType", certificateTypeRouter)
app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})