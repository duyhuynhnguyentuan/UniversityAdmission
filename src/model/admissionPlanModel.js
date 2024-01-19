const mongoose = require('mongoose')

const admissionPlanSchema = mongoose.Schema(
  { 
    universityName: {
      type: String,
      require: true
    },
    schoolYear: {
      type: Number,
      require: true
    },
    planDescription: {
      type: String,
      require: true
    },
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
  },
  {
    timestamps: true
  }
)

const AdmissionPlan = mongoose.model('AdmissionPlan', admissionPlanSchema);
module.exports = AdmissionPlan