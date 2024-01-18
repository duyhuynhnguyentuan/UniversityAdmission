import mongoose from 'mongoose';

const admissionMethodSchema = mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    AdmissionScore: {
      type: Number,
      require: true
    },
    NumberOfStudent: {
      type: Number,
      require: true
    },
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
  
  },
  {
    timestamps: true
  },
  

)

export const AdmissionMethod = mongoose.model('AdmissionMethod', admissionMethodSchema);