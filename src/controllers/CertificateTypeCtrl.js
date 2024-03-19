const CertificateType = require('../models/certificatesType');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a certificate type

const createCertificateType = asyncHandler(async (req, res) => {
  try {
    const newCertificateType = await CertificateType.create(req.body);
    res.json(newCertificateType);
  } catch (error) {
    throw new Error(error);
  }
});


// get all certificate type

const getAllCertificateType = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // Xử lý điều kiện tìm kiếm theo trường 'name'
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" }; // Tìm kiếm tất cả các mục có 'name' chứa chuỗi đã cung cấp (không phân biệt chữ hoa chữ thường)
    }

    const certificateTypes = await CertificateType.find(query);
    res.json(certificateTypes);
  } catch (error) {
    throw new Error(error);
  }
});

// get one certificate type

const getCertificateType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const certificateType = await CertificateType.findById(id);
    res.json(certificateType);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete certificate type

const deleteCertificateType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const certificateType = await CertificateType.findByIdAndDelete(id);
    res.json(certificateType);
  } catch (error) {
    throw new Error(error);
  }
});

// Update certificate type

const updateCertificateType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateCertificateType= await CertificateType.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCertificateType);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getAllCertificateType,
  getCertificateType,
  deleteCertificateType,
  createCertificateType,
  updateCertificateType
};