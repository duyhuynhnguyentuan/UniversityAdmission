const express = require('express');
const {
    createMajorInPlan,
    getAllMajorInPlans,
    getMajorInPlanById,
    updateMajorInPlan,
    deleteMajorInPlan
} = require("../controllers/MajorInPlanCtrl")
const router = express.Router();


router.post('/',createMajorInPlan);
router.get('/',getAllMajorInPlans);
router.get('/:id',getMajorInPlanById);
router.put('/:id',updateMajorInPlan);
router.delete('/:id',deleteMajorInPlan);

module.exports = router;