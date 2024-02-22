const majorInPlanSJG = require("..//models/majorInPlanSJG");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

//create a new category
const createMJP = asyncHandler(async (req, res) => {
  try {
    const newMJP = await majorInPlanSJG.create(req.body);
    res.json(newMJP);
  } catch (error) {
    throw new Error(error);
  }
});

//get a category
const getaMJP = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaMJP = await majorInPlanSJG.findById(id);
    res.json(getaMJP);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createMJP,
  getaMJP,
  getAllSubject,
  updatedSubject,
  deletedCSubject,
};
