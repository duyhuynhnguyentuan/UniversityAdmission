///DuyHNT
const Province = require("..//models/province");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");


//create new province
const createProvince = asyncHandler(async (req, res) => {
    try {
        const newProvince = await Province.create(req.body);
        res.json(newProvince);
    } catch (error) {
        throw new Error
    }
})

//get a single province 
const getaProvince = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const getaProvince = await Province.findById(id);
        res.json(getaProvince);
    } catch (error) {
        throw new Error
    }
})

//get all provinces
const getAllProvince = asyncHandler(async (req, res) => {
    try {
        const getAllProvince = await Province.find();
        res.json(getAllProvince);
    } catch (error) {
        throw new Error
    }
})

//update a province
const updatedProvince = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const updatedProvince = await Province.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedProvince);
    } catch (error) {
        throw new Error
    }
})

//delete a province
const deleteProvince = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const deletedProvince = await Province.findByIdAndDelete(id);
        res.json(deletedProvince);
    } catch (error) {
        throw new Error
    }
})

module.exports = {
    createProvince,
    getaProvince,
    getAllProvince,
    updatedProvince,
    deleteProvince,
}