const mongoose = require('mongoose')

const majorSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    code: {
      type: String,
      require: true
    },
    category: {
      type: Number,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    status: {
      type: String,
      require: true
    },
    effectiveDate: {
      type: String,
      require: true
    },
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
    admissionMethod: [{type: mongoose.Schema.Types.ObjectId, ref: "AdmissionMethod" }]
  },
  {
    timestamps: true
  }
)

const Major = mongoose.model('Major', majorSchema);
module.exports = Major