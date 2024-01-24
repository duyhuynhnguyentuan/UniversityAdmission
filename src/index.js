import mysql from "mysql2";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan"
import majorRoutes  from "./routers/Major.js"
const app = express();
const port = 8000;

dotenv.config();

export const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

app.use(morgan('dev'))
app.use(express.json())
app.use("/", majorRoutes)

app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
