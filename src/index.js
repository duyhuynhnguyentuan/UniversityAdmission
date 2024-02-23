const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const dbConnect = require('./config/database');
const highSchoolRouter = require('./routers/highSchool')
const mainSubjectRouter = require('./routers/mainSubject')
const certificateRouter = require("./routers/certificate")
const certificateTypeRouter = require("./routers/certificateType")
const authRouter = require('./routers/authRoute');
const studyprofile = require('./routers/studyProfile');
const studyPSJ = require('./routers/StudyProfileSJ');
const mJP = require('./routers/MajorInPlanSJG');
const subject = require('./routers/Subject');
const subjectG = require('./routers/SubjectG');
const universityRouter  = require('./routers/university');
const admissionPlanRouter  = require('./routers/AdmissionPlan');
const provinceRouter = require('./routers/province');
const schoolYear = require('./routers/SchoolYear');
const University_Province = require('./routers/University_Province');

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

app.use(notFound);
app.use(errorHandler);

app.use("/api/v1/highSchool", highSchoolRouter)
app.use("/api/v1/mainSubject", mainSubjectRouter)
app.use("/api/v1/certificate", certificateRouter)
app.use("/api/v1/certificateType", certificateTypeRouter)


app.use("api/v1/university", universityRouter);
app.use("api/v1/admissionPlan", admissionPlanRouter);
app.use("api/v1/province", provinceRouter);
app.use("api/v1/schoolYear", schoolYear);
app.use("api/v1/University_Province", University_Province);
app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})