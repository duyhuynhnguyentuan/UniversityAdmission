const FormalMajor = require('../models/formalMajor');

// Create a new formal major
exports.createFormalMajor = async (req, res) => {
  try {
    const { name, code, category, description, status, createdDate, major } = req.body;

    const formalMajor = new FormalMajor({
      name,
      code,
      category,
      description,
      status,
      createdDate,
      major,
    });

    await formalMajor.save();

    res.status(201).json(formalMajor);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all formal majors
exports.getAllFormalMajors = async (req, res) => {
  try {
    const formalMajors = await FormalMajor.find({});

    res.status(200).json(formalMajors);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get formal major by ID
exports.getFormalMajorById = async (req, res) => {
  try {
    const formalMajorId = req.params.id;

    const formalMajor = await FormalMajor.findById(formalMajorId).populate('major');

    if (!formalMajor) {
      return res.status(404).json({ error: 'Formal Major not found' });
    }

    res.status(200).json(formalMajor);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update formal major by ID
exports.updateFormalMajor = async (req, res) => {
  try {
    const formalMajorId = req.params.id;
    const { name, code, category, description, status, createdDate, major } = req.body;

    const formalMajor = await FormalMajor.findByIdAndUpdate(
      formalMajorId,
      { name, code, category, description, status, createdDate, major },
      { new: true }
    ).populate('major');

    if (!formalMajor) {
      return res.status(404).json({ error: 'Formal Major not found' });
    }

    res.status(200).json(formalMajor);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete formal major by ID
exports.deleteFormalMajor = async (req, res) => {
  try {
    const formalMajorId = req.params.id;

    const formalMajor = await FormalMajor.findByIdAndDelete(formalMajorId);

    if (!formalMajor) {
      return res.status(404).json({ error: 'Formal Major not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
