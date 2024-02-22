const SubjectG = require("..//models/subjectGroup");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
//create a new category
const createSubjectG = asyncHandler(async (req, res) => {
  try {
    const newSubjectG = await SubjectG.create(req.body);
    res.json(newSubjectG);
  } catch (error) {
    throw new Error(error);
  }
});

//get a category
const getaSubjectG = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaSubjectG = await Category.findById(id);
    res.json(getaSubjectG);
  } catch (error) {
    throw new Error(error);
  }
});

// get all category
const getAllSubjectG = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // Xử lý điều kiện tìm kiếm theo trường 'name'
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" }; // Tìm kiếm tất cả các mục có 'name' chứa chuỗi đã cung cấp (không phân biệt chữ hoa chữ thường)
    }

    const getAllSubjectG = await SubjectG.find(query);
    res.json(getAllSubjectG);
  } catch (error) {
    throw new Error(error);
  }
});

//update a category
const updatedSubjectG = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedSubjectG = await SubjectG.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedSubjectG);
  } catch (error) {
    throw new Error(error);
  }
});

// delete a category
const deletedCSubjectG = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCSubjectG = await CSubjectG.findByIdAndDelete(id);
    res.json(deletedCSubjectG);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createSubjectG,
  getaSubjectG,
  getAllSubjectG,
  updatedSubjectG,
  deletedCSubjectG,
};
