import mongoose from 'mongoose';

const schoolYearSchema = mongoose.Schema(
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

export const SchoolYear = mongoose.model('Province', schoolYearSchema);