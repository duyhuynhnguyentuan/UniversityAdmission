const mongoose = require('mongoose')

const studyProfileSchema = new mongoose.Schema(
  { 
    grade: {
      type: Number,
      require: true
    },
    profile : [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
    highschool: [{ type: mongoose.Schema.Types.ObjectId, ref: "HighSchool" }],
    schoolyear: [{ type: mongoose.Schema.Types.ObjectId, ref: "Schoolyear" }]

  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('StudyProfile', studyProfileSchema);