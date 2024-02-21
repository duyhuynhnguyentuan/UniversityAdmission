const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const dbConnect = require('./config/database');

dbConnect();
app.use(morgan('dev'))
app.use(express.json())

app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
