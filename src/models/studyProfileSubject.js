const mongoose = require("mongoose");

const studyProfileSubjectSchema = new mongoose.Schema(
  {
    studyProfile: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudyProfile" }],
  },
  {
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subjects" }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("StudyProfileSubject", studyProfileSubjectSchema);
