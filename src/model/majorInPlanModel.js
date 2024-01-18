import mongoose from 'mongoose';

const majorInPlanSchema = mongoose.Schema(
  { 
    majorName: {
      type: String,
      require: true
    },
    schoolYear: {
      type: String,
      require: true
    },
    subjectGroup: {
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

export const MajorInPlan = mongoose.model('MajorInPlan', majorInPlanSchema);