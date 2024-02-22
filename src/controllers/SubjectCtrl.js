const Subject = require("..//models/subjects");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId")

//create a new category
const createSubject = asyncHandler(async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.json(newSubject);
  } catch (error) {
    throw new Error(error);
  }
});

//get a category
const getaSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaSubject = await Category.findById(id);
    res.json(getaSubject);
  } catch (error) {
    throw new Error(error);
  }
});

// get all category
const getAllSubject = asyncHandler(async (req, res) => {
  try {
    const getallSubject = await Subject.find();
    res.json(getallSubject);
  } catch (error) {
    throw new Error(error);
  }
});

//update a category
const updatedSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedSubject = await Subject.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedSubject);
  } catch (error) {
    throw new Error(error);
  }
});

// delete a category
const deletedCSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCSubject = await CSubject.findByIdAndDelete(id);
    res.json(deletedCSubject);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createSubject,
  getaSubject,
  getAllSubject,
  updatedSubject,
  deletedCSubject,
};
