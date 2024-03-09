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

exports.searchMajor = async (req, res) => {
  const  {query}  = req.query; // Assuming the search query is passed as a query parameter
  if (!query) {
      return res.status(400).json({ error: 'Query parameter is missing' });
  }
  console.log(query)
  try {
      const result = await Major.find({
          $or: [
              { name: { $regex: query.toString(), $options: 'i' } }, // Case-insensitive search for name
              { code: { $regex: query.toString(), $options: 'i' } }, // Case-insensitive search for code
              { effectiveDate: { $regex: query.toString(), $options: 'i' } }, // Case-insensitive search for effectiveDate
              { note: { $regex: query.toString(), $options: 'i' } } // Case-insensitive search for note
          ]
      }).populate('majorInPlan'); // Populate referenced documents

      return res.status(200).json(result);
  } catch (error) {
      console.error('Error occurred during search:', error);
      return res.status(500).json({ error: 'Internal server error' });
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
