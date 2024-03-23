///DuyHNT

const asyncHandler = require("express-async-handler");
const University = require("../models/university");
const validateMongoDbId = require("../utils/validateMongoDbId");
//create new university
const createUniversity = asyncHandler(async (req, res) => {
  try {
    const newUniversity = await University.create(req.body);
    res.json(newUniversity);
  } catch (error) {
    throw new Error(error);
  }
});

//get a single University
const getaUniversity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaUniversity = await University.findById(id).populate('province major admissionPlan');
    if (!getaUniversity) {
      res.status(404).send({ message: "University not found" });
    }
    res.json(getaUniversity);
  } catch (e) {
    throw new Error(e);
  }
});

//get all universities
// const getAllUniversities = asyncHandler(async (req, res) => {
//     try {
//       // Extract optional filter parameters from query string
//       const { province } = req.query;

//       // If the province is provided, validate it
//       if (province) {
//         validateMongoDbId(province); // Assuming province is expected to be a MongoDB ObjectId
//       }

//       // Create a filter object based on the provided parameters
//       const filter = province ? { province } : {};

//       // Fetch universities based on the filter
//       const universities = await University.find(filter).populate('province'); // Assuming you want to populate the 'province' field

//       res.status(200).json({ universities });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });
const getAllUniversities = asyncHandler(async (req, res) => {
  try {
    const getAllUniversities = await University.find()
    .populate(
      'province'
    )
    .populate('admissionPlan', "_id schoolYear planDescription")
    .select('name description abbreviation code address contactInfo admissionPolicy yearEstablish');
    res.json(getAllUniversities);
  } catch (error) {
    throw new Error(error);
  }
});

//update a university
const updateUniversity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedUniversity = await University.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedUniversity);
  } catch (error) {
    throw new Error(error);
  }
});

//delete a university
const deleteUniversity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedUniversity = await University.findByIdAndDelete(id);
    res.json(deletedUniversity);
  } catch (error) {
    throw new Error(error);
  }
});

// search university

const searchUniversity = async (req, res) => {
  const { name, code, abbreviation, yearEstablish, contactInfo, address } = req.query;

  try {
    let queryConditions = {};

    // Check if any search parameter is provided
    if (name) queryConditions.name = { $regex: name.toString(), $options: "i" };
    if (code) queryConditions.code = { $regex: code.toString(), $options: "i" };
    if (abbreviation) queryConditions.abbreviation = { $regex: abbreviation.toString(), $options: "i" };
    if (yearEstablish) queryConditions.yearEstablish = parseInt(yearEstablish) || 0;
    if (contactInfo) queryConditions.contactInfo = { $regex: contactInfo.toString(), $options: "i" };
    if (address) queryConditions.address = { $regex: address.toString(), $options: "i" };

    const result = await University.find(queryConditions).populate("province major admissionPlan");

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred during search:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


// search university


module.exports = {
  createUniversity,
  getaUniversity,
  getAllUniversities,
  updateUniversity,
  deleteUniversity,
  searchUniversity,
};
