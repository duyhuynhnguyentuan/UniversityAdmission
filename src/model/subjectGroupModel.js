import mongoose from 'mongoose';

const subjectGroupSchema = mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subjects" }],
  },
  {
    timestamps: true
  }
)

export const SubjectGroup = mongoose.model('SubjectGroup', subjectGroupSchema);