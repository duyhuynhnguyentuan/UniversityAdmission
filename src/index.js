const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const dbConnect = require('./config/database');
const authRouter = require('./routers/authRoute');
const studyprofile = require('./routers/studyProfile');
const studyPSJ = require('./routers/StudyProfileSJ');
const mJP = require('./routers/MajorInPlanSJG');
const subject = require('./routers/Subject');
const subjectG = require('./routers/SubjectG');
const admissionForm = require('./routers/admissionForm');
const admissionMethod = require('./routers/admissionMethod');
const majorInPlan = require('./routers/majorInPlan');
const major = require('./routers/Major');
const formalMajor = require('./routers/formalMajor');


dbConnect();
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/studyprofile", studyprofile);
app.use("/api/v1/stdpsj", studyPSJ);
app.use("/api/v1/mjp", mJP);
app.use("/api/v1/subject", subject);
app.use("/api/v1/subjectg", subjectG);
app.use("/api/v1/admissionForm", admissionForm);
app.use("/api/v1/admissionMethod", admissionMethod);
app.use("/api/v1/majorInPlan", majorInPlan);
app.use("/api/v1/major", major);
app.use("/api/v1/formalMajor", formalMajor);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})
