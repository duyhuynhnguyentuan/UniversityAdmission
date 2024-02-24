const AdmissionMethod = require('../models/admissionMethod');

// Create a new admission method
exports.createAdmissionMethod = async (req, res) => {
  try {
    const { name, admissionScore, numberOfStudent,majorInPlan } = req.body;

    const admissionMethod = new AdmissionMethod({
      name,
      admissionScore,
      numberOfStudent,
      majorInPlan,
    });

    await admissionMethod.save();

    res.status(201).json(admissionMethod);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all admission methods
exports.getAllAdmissionMethods = async (req, res) => {
  try {
    const admissionMethods = await AdmissionMethod.find().populate('majorInPlan');

    res.status(200).json(admissionMethods);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get admission method by ID
exports.getAdmissionMethodById = async (req, res) => {
  try {
    const admissionMethodId = req.params.id;

    const admissionMethod = await AdmissionMethod.findById(admissionMethodId).populate('majorInPlan');

    if (!admissionMethod) {
      return res.status(404).json({ error: 'Admission Method not found' });
    }

    res.status(200).json(admissionMethod);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update admission method by ID
exports.updateAdmissionMethod = async (req, res) => {
  try {
    const admissionMethodId = req.params.id;
    const { name, admissionScore, numberOfStudent, majorInPlan } = req.body;

    const admissionMethod = await AdmissionMethod.findByIdAndUpdate(
      admissionMethodId,
      { name, admissionScore, numberOfStudent, majorInPlan },
      { new: true }
    ).populate('majorInPlan');

    if (!admissionMethod) {
      return res.status(404).json({ error: 'Admission Method not found' });
    }

    res.status(200).json(admissionMethod);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Delete admission method by ID
exports.deleteAdmissionMethod = async (req, res) => {
  try {
    const admissionMethodId = req.params.id;

    const admissionMethod = await AdmissionMethod.findByIdAndDelete(admissionMethodId);

    if (!admissionMethod) {
      return res.status(404).json({ error: 'Admission Method not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
