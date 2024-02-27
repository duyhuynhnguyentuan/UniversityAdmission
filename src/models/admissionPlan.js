const mongoose = require('mongoose')

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