const AdmissionMethod = require("../models/admissionMethod")

const getAdmissionMethod = async(req, res) => {
    try{
        const getAllAdmissionMethods = await AdmissionMethod.find();
        res.json(getAllAdmissionMethods);
    } catch(err){
        throw new Error(err);
    }
}

module.exports = {
    getAdmissionMethod
}