const Major = require('../models/major');

// Create a new major
exports.createMajor = async (req, res) => {
  try {
    const { name, code, category, description, status, effectiveDate, majorInPlan } = req.body;

    const major = new Major({
      name,
      code,
      category,
      description,
      status,
      effectiveDate,
      majorInPlan,
    });

    await major.save();

    res.status(201).json(major);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all majors
exports.getAllMajors = async (req, res) => {
  try {
    const majors = await Major.find().populate('majorInPlan');

    res.status(200).json(majors);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get major by ID
exports.getMajorById = async (req, res) => {
  try {
    const majorId = req.params.id;

    const major = await Major.findById(majorId).populate('majorInPlan');

    if (!major) {
      return res.status(404).json({ error: 'Major not found' });
    }

    res.status(200).json(major);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update major by ID
exports.updateMajor = async (req, res) => {
  try {
    const majorId = req.params.id;
    const { name, code, category, description, status, effectiveDate, majorInPlan } = req.body;

    const major = await Major.findByIdAndUpdate(
      majorId,
      { name, code, category, description, status, effectiveDate, majorInPlan },
      { new: true }
    ).populate('majorInPlan');

    if (!major) {
      return res.status(404).json({ error: 'Major not found' });
    }

    res.status(200).json(major);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete major by ID
exports.deleteMajor = async (req, res) => {
  try {
    const majorId = req.params.id;

    const major = await Major.findByIdAndDelete(majorId);

    if (!major) {
      return res.status(404).json({ error: 'Major not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
