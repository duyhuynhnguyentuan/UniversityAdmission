import mongoose from 'mongoose';

const admissionFormSchema = mongoose.Schema(
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

export const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);