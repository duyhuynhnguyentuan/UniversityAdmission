const University = require("../models/university")
const getUniversity = async(req, res) => {
    try{
        const getAllUniversity = await University.find({});
        res.json(getAllUniversity);
    } catch(err){
        throw new Error(err);
    }
}

module.exports = {
    getUniversity
}