const Subject = require("..//models/subjects");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

const createSubject = asyncHandler(async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.json(newSubject);
  } catch (error) {
    throw new Error(error);
  }
});

const getaSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaSubject = await Subject.findById(id);
    res.json(getaSubject);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllSubject = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // Xử lý điều kiện điểm lớn hơn hoặc bằng một mức cụ thể
    if (req.query.minScore) {
      query.score = { $gte: req.query.minScore };
    }
    // Xử lý điều kiện điểm nhỏ hơn hoặc bằng một mức cụ thể
    if (req.query.maxScore) {
      query.score = { ...query.score, $lte: req.query.maxScore };
    }
    // Xử lý điều kiện điểm nằm trong một khoảng cụ thể
    if (req.query.minScore && req.query.maxScore) {
      query.score = { $gte: req.query.minScore, $lte: req.query.maxScore };
    }
    const getAllSubject = await Subject.find(query);
    res.json(getAllSubject);
  } catch (error) {
    throw new Error(error);
  }
});

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
