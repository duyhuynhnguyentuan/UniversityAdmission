const mongoose = require('mongoose')
/**
 * @swagger
 * components:
 *   schemas:
 *     AdmissionMethod:
 *       type: object
 *       required:
 *         - name
 *         - AdmissionScore 
 *         - NumberOfStudent
 *       properties:
 *         name:
 *           type: string
 *           default: "cong nghe thong tin"
 *         AdmissionScore:
 *           type: number
 *           default: 9
 *         NumberOfStudent:
 *           type: number
 *           default: 25
 *     AdmissionMethodResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         AdmissionScore:
 *           type: number
 *         NumberOfStudent:
 *           type: number
 */

const admissionMethodSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    AdmissionScore: {
      type: Number,
      require: true
    },
    NumberOfStudent: {
      type: Number,
      require: true
    },
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
  
  },
  {
    timestamps: true
  },
  

)

const AdmissionMethod = mongoose.model('AdmissionMethod', admissionMethodSchema);
module.exports = AdmissionMethod