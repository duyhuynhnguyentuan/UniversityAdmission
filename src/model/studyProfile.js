const mongoose = require('mongoose')

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
const StudyProfile = mongoose.model('StudyProfile', studyProfileSchema);
module.exports = StudyProfile