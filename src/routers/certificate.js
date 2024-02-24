const express = require("express");
const router = express.Router();
const {
  getAllCertificate,
  getCertificate,
  deleteCertificate,
  createCertificate,
  updateCertificate
} = require('../controllers/CertificateCtrl')
router.post("/", createCertificate)
router.get("/", getAllCertificate)
router.get("/:id", getCertificate)
router.delete("/:id", deleteCertificate)
router.put("/:id", updateCertificate)
module.exports = router