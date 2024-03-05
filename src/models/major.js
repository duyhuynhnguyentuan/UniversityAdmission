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
 *         - category
 *         - description
 *         - status
 *         - effectiveDate
 *       properties:
 *         name:
 *           type: string
 *           default: "Cong nghe thong tin"
 *         code:
 *           type: string
 *           default: "CNTT"
 *         category:
 *           type: number
 *           default: 1
 *         description:
 *           type: string
 *           default: "nganh cong nghe thong tin"
 *         status:
 *           type: string
 *           default: "active"
 *         effectiveDate:
 *           type: string
 *           default: "17/12/2009"
 *     MajorResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         code:
 *           type: string
 *         category:
 *           type: number
 *         description:
 *           type: string
 *         status:
 *           type: string
 *         effectiveDate:
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