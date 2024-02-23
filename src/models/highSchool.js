const mongoose = require('mongoose')

const highSchoolSchema = new mongoose.Schema(
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

const HighSchool = mongoose.model('HighSchool', highSchoolSchema);
module.exports = HighSchool