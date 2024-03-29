const StudyProfile = require("../models/studyProfile");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// create a new StudyProfile
const newStudyProfile = asyncHandler(async (req, res, next) => {
  try {
    const newStudyProfile = await StudyProfile.create(req.body);
    res.json(newStudyProfile);
  } catch (error) {
    throw new Error(error);
  }
});

const getaStudyProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaStudyProfile = await StudyProfile.findById(id);
    res.json(getaStudyProfile);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllStudyProfile = asyncHandler(async (req, res) => {
  try {
    let query = {};
    if (req.query.grade) {
      query.grade = req.query.grade;
    }
    if (req.query.grade_lt) {
      query.grade = { $lt: req.query.grade_lt };
    }
    if (req.query.grade_gt) {
      query.grade = { $gt: req.query.grade_lt };
    }
    const getAllStudyProfile = await StudyProfile.find(query);
    res.json(getAllStudyProfile);
  } catch (error) {
    throw new Error(error);
  }
});

const updatedStudyProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const updatedStudyProfile = await StudyProfile.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedStudyProfile);
    } catch (error) {
      throw new Error(error);
    }
  });

  const deletedStudyProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const deletedStudyProfile = await StudyProfile.findByIdAndDelete(id);
      res.json(deletedStudyProfile);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {
  newStudyProfile,
  getaStudyProfile,
  getAllStudyProfile,
  updatedStudyProfile,
  deletedStudyProfile
};
