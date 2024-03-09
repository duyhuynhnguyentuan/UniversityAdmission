const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     SchoolYear:
 *       type: object 
 *       required: 
 *         - startDate
 *         - endDate
 *         - year
 *       properties:
 *         startDate: 
 *           type: string
 *           default: "5/9/2014"
 *           description: The start date of the school year.
 *         endDate: 
 *           type: string
 *           default: "15/6/2015"
 *           description: The end date of the school year.
 *         year: 
 *           type: integer
 *           description: The academic year.
 *         admissionPlan: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/admissionPlan'
 *           description: Array of Admission Plan objects associated with the school year.
 *         studyProfile: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/studyProfile'
 *           description: Array of Study Profile objects associated with the school year.
 *     SchoolYearResponse: 
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier for the school year.
 *         startDate: 
 *           type: string
 *           default: "5/9/2014"
 *           description: The start date of the school year.
 *         endDate: 
 *           type: string
 *           default: "15/6/2015"
 *           description: The end date of the school year.
 *         year: 
 *           type: integer
 *           default: 2016
 *           description: The academic year.
 *         admissionPlan: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/admissionPlan'
 *           description: Array of Admission Plan objects associated with the school year.
 *         studyProfile: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/studyProfile'
 *           description: Array of Study Profile objects associated with the school year.
 *         createdAt:
 *           type: string
 *           description: The date and time when the school year was created.
 *         updatedAt:
 *           type: string
 *           description: The date and time when the school year was last updated.
 */

const schoolYearSchema = new mongoose.Schema(
  { 
    startDate: {
      type: String,
      require: true
    },
    endDate: {
      type: String,
      require: true
    },
    year: {
      type: Number,
      require: true
    },
    admissionPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "AdmissionPlan" }],
    studyProfile: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudyProfile" }],
  },
  {
    timestamps: true
  }
)

const SchoolYear = mongoose.model('SchoolYear', schoolYearSchema);
module.exports = SchoolYear