import mongoose from 'mongoose';

const subjectSchema = mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    score: {
      type: Number,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    subjectGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubjectGroup" }],
    mainSubject: [{ type: mongoose.Schema.Types.ObjectId, ref: "MainSubject" }],
  },
  {
    timestamps: true
  }
)

export const Subjects = mongoose.model('Subjects', subjectSchema);