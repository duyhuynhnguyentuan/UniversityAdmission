const StudyProfileSJ = require("../models/studyProfileSubject");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
const XLSX = require("xlsx");
const multer = require("multer");

const createStudyProfileSJ = asyncHandler(async (req, res) => {
  try {
    const newStudyProfileSJ = await StudyProfileSJ.create(req.body);
    res.json(newStudyProfileSJ);
  } catch (error) {
    throw new Error(error);
  }
});

const getaStudyProfileSJ = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaStudyProfileSJ = await StudyProfileSJ.findById(id);
    res.json(getaStudyProfileSJ);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllStudyProfileSJ = asyncHandler(async (req, res) => {
  try {
    const getAllStudyProfileSJ = await StudyProfileSJ.find();
    res.json(getAllStudyProfileSJ);
  } catch (error) {
    throw new Error(error);
  }
});

const uploadXLSX = async (req, res) => {
  try {
    const path = req.file.path;
    const workbook = XLSX.readFile(path);
    const sheetNameList = workbook.SheetNames;
    const jsonData = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheetNameList[0]]
    );

    if (jsonData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Excel sheet has no data",
      });
    }

    const savedData = await StudyProfileSJ.create(jsonData);

    return res.status(201).json({
      success: true,
      message: `${savedData.length} rows added to the database`,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  createStudyProfileSJ,
  getaStudyProfileSJ,
  getAllStudyProfileSJ,
  uploadXLSX
};
