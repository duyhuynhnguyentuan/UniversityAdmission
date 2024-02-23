const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const dbConnect = require('./config/database');
const highSchoolRouter = require('./routers/highSchool')
const mainSubjectRouter = require('./routers/mainSubject')
const certificateRouter = require("./routers/certificate")
const certificateTypeRouter = require("./routers/certificateType")
dbConnect();
app.use(morgan('dev'))
app.use(express.json())

app.use("/api/v1/highSchool", highSchoolRouter)
app.use("/api/v1/mainSubject", mainSubjectRouter)
app.use("/api/v1/certificate", certificateRouter)
app.use("/api/v1/certificateType", certificateTypeRouter)
app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})