const express = require("express");
const router = express.Router();
const {
  getAllCertificateType,
  getCertificateType,
  deleteCertificateType,
  createCertificateType,
  updateCertificateType
} = require('../controllers/CertificateTypeCtrl')
router.post("/", createCertificateType)
router.get("/", getAllCertificateType)
router.get("/:id", getCertificateType)
router.delete("/:id", deleteCertificateType)
router.put("/:id", updateCertificateType)
module.exports = router