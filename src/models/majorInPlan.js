const mongoose = require('mongoose')
/**
 * @swagger
 * components:
 *   schemas:
 *     MajorInPlan:
 *       type: object
 *       required:
 *         - majorName
 *         - schoolYear 
 *         - numberOfStudent
 *       properties:
 *         majorName:
 *           type: string
 *           default: "cong nghe thong tin"
 *         schoolYear:
 *           type: number
 *           default: 2008
 *         numberOfStudent:
 *           type: number
 *           default: 25
 *     MajorInPlanResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         majorName:
 *           type: string
 *         schoolYear:
 *           type: number
 *         numberOfStudent:
 *           type: number
 */

const majorInPlanSchema = new mongoose.Schema(
  { 
    majorName: {
      type: String,
      require: true
    },
    schoolYear: {
      type: String,
      require: true
    },
    numberOfStudent: {
      type: Number,
      require: true
    },
    subjectGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubjectGroup" }],
  },
  {
    timestamps: true
  }
)

 const MajorInPlan = mongoose.model('MajorInPlan', majorInPlanSchema);
 module.exports = MajorInPlan