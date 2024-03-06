const mongoose = require('mongoose')
/**
 * @swagger
 * components:
 *   schemas:
 *     AdmissionForm:
 *       type: object
 *       required:
 *         - formType
 *         - formDate 
 *         - submissionDeadline
 *       properties:
 *         formType:
 *           type: string
 *           default: "cong nghe thong tin"
 *         formDate:
 *           type: string
 *           default: "05/11/2005"
 *         submissionDeadline:
 *           type: string
 *           default: "15/04/2006"
 *     AdmissionFormResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         formType:
 *           type: string
 *         formDate:
 *           type: string
 *         submissionDeadline:
 *           type: string
 */

const admissionFormSchema = new mongoose.Schema(
  { 
    formType: {
      type: String,
      require: true
    },
    formDate: {
      type: String,
      require: true
    },
    submissionDeadline: {
      type: String,
      require: true
    },
    admissionMethod: [{ type: mongoose.Schema.Types.ObjectId, ref: "admissionMethod" }],
  },
  {
    timestamps: true
  }
)
 const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);
 module.exports = AdmissionForm