const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     HighSchool:
 *       type: object
 *       required:
 *         - name
 *         - year 
 *         - location
 *         - contactInfo
 *       properties:
 *         name:
 *           type: string
 *           default: "truong hoc FPT"
 *         year:
 *           type: string
 *           default: "2012"
 *         location:
 *           type: string
 *           default: "FPTU"
 *         contactInfo:
 *           type: string
 *           default: "Truong dai hoc ve cong nghe dau hang Viet Nam"
 *     HighSchoolResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         year:
 *           type: string
 *         location:
 *           type: string
 *         contactInfo:
 *           type: string
 */

const highSchoolSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    year: {
      type: String,
      require: true
    },
    location: {
      type: String,
      require: true
    },
    contactInfo: {
      type: String,
      require: true
    },
    profile: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
    studyProfile: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudyProfile" }],
  },
  {
    timestamps: true
  }
)

const HighSchool = mongoose.model('HighSchool', highSchoolSchema);
module.exports = HighSchool