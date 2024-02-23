const StudyProfileSJ = require("../models/studyProfileSubject");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

const createStudyProfileSJ = asyncHandler(async (req, res) => {
    try {
      const newStudyProfileSJ = await StudyProfileSJ.create(req.body);
      res.json(newStudyProfileSJ);
    } catch (error) {
      throw new Error(error);
    }
  });

  const getaStudyProfileSJ = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const getaStudyProfileSJ = await StudyProfileSJ.findById(id);
      res.json(getaStudyProfileSJ);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {
    createStudyProfileSJ,
    getaStudyProfileSJ
};