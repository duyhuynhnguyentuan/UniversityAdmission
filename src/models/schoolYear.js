const mongoose = require('mongoose')

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
      type: String,
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