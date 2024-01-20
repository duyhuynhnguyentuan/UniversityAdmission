const mongoose = require('mongoose')


const admissionFormSchema = new mongoose.Schema(
  { 
    formType: {
      type: String,
      require: true
    },
    formDate: {
      type: Number,
      require: true
    },
    submissionDeadline: {
      type: String,
      require: true
    },
    admissionMethod: [{ type: mongoose.Schema.Types.ObjectId, ref: "admissionMethod" }],
  },
  {
    timestamps: true
  }
)
 const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);
 module.exports = AdmissionForm