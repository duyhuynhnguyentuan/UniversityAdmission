import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getMajors() {
  const data = await pool.query("SELECT * FROM major");
  return data[0];
}

async function getMajor(id) {
  const [rows] = await pool.query(`SELECT * FROM major WHERE major_id = ?`, [id]);
  return rows[0];
}

const major = await getMajors();
console.log(major);
