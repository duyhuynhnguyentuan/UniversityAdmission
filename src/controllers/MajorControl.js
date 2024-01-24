import { pool } from "../index.js"

export const getAllMajors = async() => {
  try {
    const [data] = await pool.query("SELECT * FROM major");
    return data;  // lay array của tat ca major
  } catch (error) {
    throw new Error(error);
  }
}

export const getMajorbyId = async(id) => {
  try {
    const  data  = await pool.query(`SELECT * FROM major WHERE major_id = ?`, [id]);
    return data[0][0]; // lay object la 1 major
  } catch (error) {
    throw new Error(error);
  }
}

