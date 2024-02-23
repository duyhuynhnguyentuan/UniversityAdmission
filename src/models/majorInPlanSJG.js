const mongoose = require("mongoose");

const majorInPlanSJGSchema = new mongoose.Schema(
  {
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
  },
  {
    subjectGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubjectGroup" }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("MajorInPlanSJG", majorInPlanSJGSchema);
