const majorInPlanSJG = require("..//models/majorInPlanSJG");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

const createMJP = asyncHandler(async (req, res) => {
  try {
    const newMJP = await majorInPlanSJG.create(req.body);
    res.json(newMJP);
  } catch (error) {
    throw new Error(error);
  }
});

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

const getAllMJP = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // Xử lý điều kiện tìm kiếm theo trường 'name'
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" }; // Tìm kiếm tất cả các mục có 'name' chứa chuỗi đã cung cấp (không phân biệt chữ hoa chữ thường)
    }
    const getAllMJP = await majorInPlanSJG.find(query);
    res.json(getAllMJP);
  } catch (error) {
    throw new Error(error);
  }
});

const updatedSMJP = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedSMJP = await majorInPlanSJG.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedSMJP);
  } catch (error) {
    throw new Error(error);
  }
});

const deletedMJP = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const deletedMJP = await majorInPlanSJG.findByIdAndDelete(id);
      res.json(deletedMJP);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {
  createMJP,
  getaMJP,
  getAllMJP,
  updatedSMJP,
  deletedMJP,
};
