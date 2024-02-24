///DuyHNT
const asyncHandler = require("express-async-handler");
const SchoolYear = require("../models/schoolYear");
const validateMongoDbId = require("../utils/validateMongoDbId");

//create a school year
const createSchoolYear = asyncHandler(async (res, req) => {
    try {
        const newSchoolYear = await SchoolYear.create(req.body)
        res.json(newSchoolYear)
    } catch (error) {
        throw new Error(error)
    }
})

//get a single school year
const getaSchoolYear = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const getaSchoolYear = await SchoolYear.findById(id);
        res.json(getaSchoolYear);
    } catch (error) {
        throw new Error
    }
})

//get all school years
const getAllSchoolYear = asyncHandler(async (req, res) => {
    try {
        const getAllSchoolYear = await SchoolYear.find();
        res.json(getAllSchoolYear);
    } catch (error) {
        throw new Error
    }
})

//update a school year
const updateSchoolYear = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const updatedSchoolYear = await SchoolYear.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedSchoolYear);
    } catch (error) {
        throw new Error
    }
})

//delete a school year
const deleteSchoolYear = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const deletedSchoolYear = await SchoolYear.findByIdAndDelete(id);
        res.json(deletedSchoolYear);
    } catch (error) {
        throw new Error
    }
})

module.exports = {
    createSchoolYear,
    getaSchoolYear,
    getAllSchoolYear,
    updateSchoolYear,
    deleteSchoolYear,
}