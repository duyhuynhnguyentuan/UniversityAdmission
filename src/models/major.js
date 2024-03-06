const mongoose = require('mongoose')
/**
 * @swagger
 * components:
 *   schemas:
 *     Major:
 *       type: object
 *       required:
 *         - name
 *         - code 
 *         - effectiveDate
 *         - note
 *       properties:
 *         name:
 *           type: string
 *           default: "Cong nghe thong tin"
 *         code:
 *           type: string
 *           default: "CNTT"
 *         effectiveDate:
 *           type: string
 *           default: "N/A"
 *         note:
 *           type: string
 *           default: "nganh cong nghe thong tin"
 *     MajorResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         code:
 *           type: string
 *         effectiveDate:
 *           type: string
 *         note:
 *           type: string
 */

const majorSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    code: {
      type: String,
      require: true
    },
    effectiveDate: {
      type: String,
      require: true
    },
    note: {
      type: String,
      require: true
    },
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
    admissionMethod: [{type: mongoose.Schema.Types.ObjectId, ref: "AdmissionMethod" }]
  },
  {
    timestamps: true
  }
)

const Major = mongoose.model('Major', majorSchema);
module.exports = Major