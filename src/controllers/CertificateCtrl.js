const Certificate = require('../models/certificate');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a certificate

const createCertificate = asyncHandler(async (req, res) => {
  try {
    const newCertificate = await Certificate.create(req.body);
    res.json(newCertificate);
  } catch (error) {
    throw new Error(error);
  }
});


// get all certificate

const getAllCertificate = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // Xử lý điều kiện tìm kiếm theo trường 'name'
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" }; // Tìm kiếm tất cả các mục có 'name' chứa chuỗi đã cung cấp (không phân biệt chữ hoa chữ thường)
    }

    const certificates = await Certificate.find(query);
    res.json(certificates);
  } catch (error) {
    throw new Error(error);
  }
});

// get one certificate

const getCertificate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const certificate = await Certificate.findById(id);
    res.json(certificate);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete certificate

const deleteCertificate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const certificate = await Certificate.findByIdAndDelete(id);
    res.json(certificate);
  } catch (error) {
    throw new Error(error);
  }
});

// Update certificate

const updateCertificate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateCertificate= await Certificate.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCertificate);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getAllCertificate,
  getCertificate,
  deleteCertificate,
  createCertificate,
  updateCertificate
};