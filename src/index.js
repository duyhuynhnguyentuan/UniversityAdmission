import dotenv from "dotenv";
import express from "express";
import morgan from "morgan"
// import majorRoutes  from "./routers/Major.js"
const app = express();
const port = 8000;

dotenv.config();

app.use(morgan('dev'))
app.use(express.json())
// app.use("/", majorRoutes)

app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})
