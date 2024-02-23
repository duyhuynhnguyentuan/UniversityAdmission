///DuyHNT
const University_Province = require("..//models/University_Province");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");


//create a new University_Province
const createUni_Province = asyncHandler(async (req,res) => {
    try {
        const newUni_Province = await University_Province.create(req.body);
        res.json(newUni_Province);
    } catch (error) {
        throw new Error(error);
    }
})

//get a single University_Province
const getaUni_Province = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const getaUni_Province = await University_Province.findById(id);
        res.json(getaUni_Province);
    } catch (error) {
        throw new Error(error);
    }
})

//get all University_Province
const getAllUni_Province = asyncHandler(async (req, res) => {
    try {
        const getAllUni_Province = await University_Province.find();
        res.json(getAllUni_Province);
    } catch (error) {
        throw new Error(error);
    }
})

//update a University_Province
const updateUni_Province = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const updatedUni_Province = await University_Province.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedUni_Province);
    } catch (error) {
        throw new Error(error);
    }
})


//delete a University_Province
const deleteUni_Province = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const deletedUni_Province = await University_Province.findByIdAndDelete(id);
        res.json(deletedUni_Province);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = {
    createUni_Province,
    getaUni_Province,
    getAllUni_Province,
    updateUni_Province,
    deleteUni_Province,
}