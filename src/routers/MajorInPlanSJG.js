const express = require("express");
const {
    createMJP,
    getaMJP,
    getAllMJP,
    updatedSMJP,
    deletedMJP,
} = require('../controllers/MajorInPlanSJGCtrl');
const router = express.Router();


router.post("/", createMJP);
router.get("/:id", getaMJP);
router.get("/", getAllMJP);
router.put("/:id", updatedSMJP);
router.delete("/:id",deletedMJP);

module.exports = router;
