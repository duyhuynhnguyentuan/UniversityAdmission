import mongoose from 'mongoose';

const studyProfileSchema = mongoose.Schema(
  { 
    grade: {
      type: Number,
      require: true
    },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subjects" }], 
  },
  {
    timestamps: true
  }
)

export const StudyProfile = mongoose.model('StudyProfile', studyProfileSchema);