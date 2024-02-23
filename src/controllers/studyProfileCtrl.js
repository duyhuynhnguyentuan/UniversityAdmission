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

module.exports = {
  newStudyProfile,
};
