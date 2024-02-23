const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const dbConnect = require('./config/database');
const universityRouter  = require('./routers/university');
const admissionPlanRouter  = require('./routers/AdmissionPlan');
const provinceRouter = require('./routers/province');
const schoolYear = require('./routers/SchoolYear');
const University_Province = require('./routers/University_Province');
dbConnect();
app.use(morgan('dev'))
app.use(express.json())


app.use("api/v1/university", universityRouter);
app.use("api/v1/admissionPlan", admissionPlanRouter);
app.use("api/v1/province", provinceRouter);
app.use("api/v1/schoolYear", schoolYear);
app.use("api/v1/University_Province", University_Province);
app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
