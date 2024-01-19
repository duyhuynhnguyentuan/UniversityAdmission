const mongoose = require('mongoose')

const profileSchema = mongoose.Schema(
  { 
    studentId: {
      type: String,
      require: true
    },
    name: {
      type: Number,
      require: true
    },
    DOB: {
      type: String,
      require: true
    },
    introduction: {
      type: String,
      require: true
    },
    schoolName: {
      type: String,
      require: true
    },
    profile: {
      type: String,
      require: true
    },
    status: {
      type: String,
      require: true
    },
    createdDate: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      require: true
    },
    certificate: [{ type: mongoose.Schema.Types.ObjectId, ref: "Certificate" }],
    studyProfile: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudyProfile" }],
    mainSubject: [{ type: mongoose.Schema.Types.ObjectId, ref: "MainSubject" }],
  },
  {
    timestamps: true
  }
)

 const Profile = mongoose.model('Profile', profileSchema);
 module.exports = Profile