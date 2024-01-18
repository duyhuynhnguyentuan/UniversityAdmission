import mongoose from 'mongoose';

const mainSubjectSchema = mongoose.Schema(
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
  },
  {
    timestamps: true
  }
)

export const MainSubject = mongoose.model('MainSubject', mainSubjectSchema);