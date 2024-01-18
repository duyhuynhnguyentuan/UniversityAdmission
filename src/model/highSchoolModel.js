import mongoose from 'mongoose';

const highSchoolSchema = mongoose.Schema(
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

export const HighSchool = mongoose.model('MainSubject', highSchoolSchema);