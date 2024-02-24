const AdmissionForm = require('../models/admissionForm');

// Create a new admission form
exports.createAdmissionForm = async (req, res) => {
  try {
    const { formType, formDate, submissionDeadline } = req.body;

    const admissionForm = new AdmissionForm({
      formType,
      formDate,
      submissionDeadline,
    });

    await admissionForm.save();

    res.status(201).json(admissionForm);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get all admission forms
exports.getAllAdmissionForms = async (req, res) => {
  try {
    const admissionForms = await AdmissionForm.find();

    res.status(200).json(admissionForms);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//update admission form
exports.updateAdmissionForm = async (req, res) => {
  try {
    const admissionFormId = req.params.id;
    const { formType, formDate, submissionDeadline, admissionMethod } = req.body;

    const admissionForm = await AdmissionForm.findByIdAndUpdate(
      admissionFormId,
      { formType, formDate, submissionDeadline, admissionMethod },
      { new: true }
    ).populate('admissionMethod');

    if (!admissionForm) {
      return res.status(404).json({ error: 'Admission Form not found' });
    }

    res.status(200).json(admissionForm);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//// Delete admission form by ID
exports.deleteAdmissionForm = async (req, res) => {
  try {
    const admissionFormId = req.params.id;

    const admissionForm = await AdmissionForm.findByIdAndDelete(admissionFormId);

    if (!admissionForm) {
      return res.status(404).json({ error: 'Admission Form not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
