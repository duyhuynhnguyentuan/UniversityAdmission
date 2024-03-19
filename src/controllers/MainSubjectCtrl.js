const MainSubject = require('../models/mainSubject');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a main subject

const createMainSubject = asyncHandler(async (req, res) => {
  try {
    const newMainSubject = await MainSubject.create(req.body);
    res.json(newMainSubject);
  } catch (error) {
    throw new Error(error);
  }
});


// get all main subject

const getAllMainsubject = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // Xử lý điều kiện tìm kiếm theo trường 'name'
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" }; // Tìm kiếm tất cả các mục có 'name' chứa chuỗi đã cung cấp (không phân biệt chữ hoa chữ thường)
    }

    const mainsubjects = await MainSubject.find(query);
    res.json(mainsubjects);
  } catch (error) {
    throw new Error(error);
  }
});

// get one Main Subject

const getMainSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const mainSubject = await MainSubject.findById(id);
    res.json(mainSubject);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete Main Subject

const deleteMainSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const mainSubject = await MainSubject.findByIdAndDelete(id);
    res.json(mainSubject);
  } catch (error) {
    throw new Error(error);
  }
});

// Update Main Subject

const updateMainSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateMainSubject= await MainSubject.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateMainSubject);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getAllMainsubject,
  getMainSubject,
  deleteMainSubject,
  createMainSubject,
  updateMainSubject
};