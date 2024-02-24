const MajorInPlan = require('../models/majorInPlan');

// Create a new major in plan
exports.createMajorInPlan = async (req, res) => {
  try {
    const { majorName, schoolYear, numberOfStudent, subjectGroup } = req.body;

    const majorInPlan = new MajorInPlan({
      majorName,
      schoolYear,
      numberOfStudent,
      subjectGroup,
    });

    await majorInPlan.save();

    res.status(201).json(majorInPlan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all majors in plan
exports.getAllMajorInPlans = async (req, res) => {
  try {
    const majorInPlans = await MajorInPlan.find().populate('subjectGroup');

    res.status(200).json(majorInPlans);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get major in plan by ID
exports.getMajorInPlanById = async (req, res) => {
  try {
    const majorInPlanId = req.params.id;

    const majorInPlan = await MajorInPlan.findById(majorInPlanId).populate('subjectGroup');

    if (!majorInPlan) {
      return res.status(404).json({ error: 'Major In Plan not found' });
    }

    res.status(200).json(majorInPlan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update major in plan by ID
exports.updateMajorInPlan = async (req, res) => {
  try {
    const majorInPlanId = req.params.id;
    const { majorName, schoolYear, numberOfStudent, subjectGroup } = req.body;

    const majorInPlan = await MajorInPlan.findByIdAndUpdate(
      majorInPlanId,
      { majorName, schoolYear, numberOfStudent, subjectGroup },
      { new: true }
    ).populate('subjectGroup');

    if (!majorInPlan) {
      return res.status(404).json({ error: 'Major In Plan not found' });
    }

    res.status(200).json(majorInPlan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete major in plan by ID
exports.deleteMajorInPlan = async (req, res) => {
  try {
    const majorInPlanId = req.params.id;

    const majorInPlan = await MajorInPlan.findByIdAndDelete(majorInPlanId);

    if (!majorInPlan) {
      return res.status(404).json({ error: 'Major In Plan not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
