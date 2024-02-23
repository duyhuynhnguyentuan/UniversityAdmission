///DuyHNT 
const expresss = require('express')

const {
    createAdmissionPlan,
    getaAdmissionPlan,
    getAllAdmissionPlan,
    updatedAdmissionPlan,
    deletedAdmissionPlan,
} = require('../controllers/AdmissionPlanCtrl');

const router = expresss.Router();


router.post("/", createAdmissionPlan);
router.get("/:id", getaAdmissionPlan);
router.get("/", getAllAdmissionPlan);
router.put("/:id", updatedAdmissionPlan);
router.delete("/:id", deletedAdmissionPlan);

module.exports = router;