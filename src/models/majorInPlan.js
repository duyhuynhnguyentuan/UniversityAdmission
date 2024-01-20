const mongoose = require('mongoose')

const majorInPlanSchema = new mongoose.Schema(
  { 
    majorName: {
      type: String,
      require: true
    },
    schoolYear: {
      type: String,
      require: true
    },
    numberOfStudent: {
      type: Number,
      require: true
    },
    subjectGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubjectGroup" }],
  },
  {
    timestamps: true
  }
)

 const MajorInPlan = mongoose.model('MajorInPlan', majorInPlanSchema);
 module.exports = MajorInPlan