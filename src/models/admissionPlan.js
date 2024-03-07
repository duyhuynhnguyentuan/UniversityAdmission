const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     AdmissionPlan:
 *       type: object 
 *       required: 
 *         - schoolYear
 *         - planDescription
 *       properties:
 *         schoolYear: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/schoolYear'
 *           description: Array of School Year objects associated with the admission plan.
 *         planDescription: 
 *           type: string
 *           required: true
 *           description: Description of the admission plan.
 *         university: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/university'
 *           description: Array of University objects associated with the admission plan.
 *         majorInPlan: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/majorInPlan'
 *           description: Array of MajorInPlan objects associated with the admission plan.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the admission plan was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the admission plan was last updated.
 * 
 *     AdmissionPlanResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier for the admission plan.
 *         schoolYear: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/schoolYear'
 *           description: Array of School Year objects associated with the admission plan.
 *         planDescription: 
 *           type: string
 *           description: Description of the admission plan.
 *         university: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/university'
 *           description: Array of University objects associated with the admission plan.
 *         majorInPlan: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/majorInPlan'
 *           description: Array of MajorInPlan objects associated with the admission plan.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the admission plan was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the admission plan was last updated.
 */

const admissionPlanSchema = new mongoose.Schema(
  { 
    schoolYear: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "SchoolYear"
    }],
    planDescription: {
      type: String,
      require: true
    },
    university: [{ type: mongoose.Schema.Types.ObjectId, ref: "University" }],
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
  },
  {
    timestamps: true
  }
)

const AdmissionPlan = mongoose.model('AdmissionPlan', admissionPlanSchema);
module.exports = AdmissionPlan