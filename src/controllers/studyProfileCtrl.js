const StudyProfile = require("../models/studyProfile");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// create a new StudyProfile
const newStudyProfile = asyncHandler(async (req, res, next) => {
  try {
    const newStudyProfile = await Subject.create(req.body);
    res.json(newStudyProfile);
  } catch (error) {
    throw new Error(error);
  }
});

const getaStudyProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaStudyProfile = await Category.findById(id);
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
    const getAllStudyProfile = await Category.find(query);
    res.json(getAllStudyProfile);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  newStudyProfile,
  getaStudyProfile,
  getAllStudyProfile,
};
