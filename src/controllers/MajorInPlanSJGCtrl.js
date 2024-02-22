const majorInPlanSJG = require("..//models/majorInPlanSJG");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
//create a new category
const createMJP = asyncHandler(async (req, res) => {
  try {
    const newSubject = await majorInPlanSJG.create(req.body);
    res.json(newSubject);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createMJP,
  getaSubject,
  getAllSubject,
  updatedSubject,
  deletedCSubject,
};
