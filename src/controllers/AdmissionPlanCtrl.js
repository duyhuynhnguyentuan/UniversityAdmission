///DuyHNT
const AdmissionPlan = require("../models/admissionPlan");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

//create a new admission plan 
const createAdmissionPlan = asyncHandler(async (req, res) => {
  try {
    const newAdmissionPlan = await AdmissionPlan.create(req.body);
    res.json(newAdmissionPlan);
  } catch (error) {
    throw new Error(error);
  }
});

//get a single admission plan
const getaAdmissionPlan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaAdmissionPlan = await AdmissionPlan.findById(id);
    res.json(getaAdmissionPlan);
  } catch (error) {
    throw new Error(error);
  }
});

const getAdmissionPlanForUni = asyncHandler(async (req, res) => {
  try{
  const getAdmissionPlanForUni = await AdmissionPlan.find({})
  .populate('schoolYear')
  .select('_id planDescription');
   res.json(getAdmissionPlanForUni);
 }catch (error) {
  throw new Error(error);
}
});
// get all admission plan
const getAllAdmissionPlan = asyncHandler(async (req, res) => {
  try {
    const getAllAdmissionPlan = await AdmissionPlan.find();
    res.json(getAllAdmissionPlan);
  } catch (error) {
    throw new Error(error);
  }
});

//update a admission plan
const updatedAdmissionPlan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedAdmissionPlan = await AdmissionPlan.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedAdmissionPlan);
  } catch (error) {
    throw new Error(error);
  }
});

// delete a admission plan
const deletedAdmissionPlan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedAdmissionPlan = await AdmissionPlan.findByIdAndDelete(id);
    res.json(deletedAdmissionPlan);
  } catch (error) {
    throw new Error(error);
  }
});


module.exports = {
  createAdmissionPlan,
  getaAdmissionPlan,
  getAllAdmissionPlan,
  updatedAdmissionPlan,
  deletedAdmissionPlan,
  getAdmissionPlanForUni
};
