import express from 'express';
import { getAllMajors, getMajorbyId } from '../controllers/MajorControl.js';

const router = express.Router();

router.get('/majors', async (req, res) => {
  const majors = await getAllMajors();
  return res.send(majors)
})

router.get('/majors/:id', async (req, res) => {
  const { id } = req.params;
  const major = await getMajorbyId(id);
  return res.send(major)
})


export default router