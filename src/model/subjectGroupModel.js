const mongoose = require('mongoose')

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

 const SubjectGroup = mongoose.model('SubjectGroup', subjectGroupSchema);
 module.exports = SubjectGroup