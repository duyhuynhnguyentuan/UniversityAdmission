const HighSchool = require('../models/highSchool');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a highSchool

const createHighSchool = asyncHandler(async (req, res) => {
  try {
    const newHighSchool = await HighSchool.create(req.body);
    res.json(newHighSchool);
  } catch (error) {
    throw new Error(error);
  }
});


// get all highschool

const getAllHighSchool = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // Xử lý điều kiện tìm kiếm theo trường 'name'
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" }; // Tìm kiếm tất cả các mục có 'name' chứa chuỗi đã cung cấp (không phân biệt chữ hoa chữ thường)
    }

    const highSchools = await HighSchool.find(query);
    res.json(highSchools);
  } catch (error) {
    throw new Error(error);
  }
});

// get one highschool

const getHighSchool = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const highSchool = await HighSchool.findById(id);
    res.json(highSchool);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete highSchool

const deleteHighSchool = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const highSchool = await HighSchool.findByIdAndDelete(id);
    res.json(highSchool);
  } catch (error) {
    throw new Error(error);
  }
});

// Update highSchool

const updateHighSchool = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateHighSchool= await HighSchool.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateHighSchool);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getAllHighSchool,
  getHighSchool,
  deleteHighSchool,
  createHighSchool,
  updateHighSchool
};