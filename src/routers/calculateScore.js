const express = require('express');
const router = express.Router();
const AdmissionMethod = require('../models/admissionMethod');
const Major = require('../models/major');
const SchoolYear = require('../models/schoolYear');
const University = require('../models/university');

router.get('/', async (req, res) => {
  try {
    const { admissionMethodName, inputScore, inputMajor } = req.query;

    // Find the major by name
    const major = await Major.findOne({ name: inputMajor });

    if (!major) {
      return res.status(404).json({ message: 'Major not found' });
    }

    // Find admission methods with the given name and score condition
    const admissionMethods = await AdmissionMethod.find({
      name: admissionMethodName,
      AdmissionScore: { $lte: inputScore },
      major: major._id
    }).populate({
      path: 'schoolYear',
      select: 'year'
    }).populate({
      path: 'university',
      select: 'name'
    });

    if (admissionMethods.length === 0) {
      return res.status(404).json({ message: 'No matching admission methods found' });
    }

    // Extracting required fields and constructing response
    const responseData = admissionMethods.map(admissionMethod => ({
      id: admissionMethod._id,
      AdmissionScore: admissionMethod.AdmissionScore,
      NumberOfStudent: admissionMethod.NumberOfStudent,
      schoolYear: admissionMethod.schoolYear.map(year => year.year),
      university: admissionMethod.university.map(univ => univ.name)
    }));

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
