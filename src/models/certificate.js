const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     Certificate:
 *       type: object
 *       required:
 *         - name
 *         - type 
 *         - linkCertificate
 *         - startDate
 *         - expiredDate
 *       properties:
 *         name:
 *           type: string
 *           default: "truong hoc FPT"
 *         type:
 *           type: string
 *           default: "ielts"
 *         linkCertificate:
 *           type: string
 *           default: "https://www.google.com/"
 *         startDate:
 *           type: string
 *           default: "10/10/2005"
 *         expiredDate
 *           type: string
 *           default: "10/10/2008"
 *     CertificateResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         type:
 *           type: string
 *         linkCertificate:
 *           type: string
 *         startDate:
 *           type: string
 *         expiredDate
 *           type: string
 */

const certificateSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
    linkCertificate: {
      type: String,
      require: true
    },
    startDate: {
      type: String,
      require: true
    },
    expiredDate: {
      type: String,
      require: true
    },
  },
  {
    timestamps: true
  }
)

 const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate