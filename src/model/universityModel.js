import mongoose from 'mongoose';

const universitySchema = mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    yearEstablish: {
      type: Number,
      require: true
    },
    admissionPolicy: {
      type: String,
      require: true
    },
    contactInfo: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    major: [{ type: mongoose.Schema.Types.ObjectId, ref: "Major" }],
    admissionPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "AdmissionPlan" }],
    province: [{ type: mongoose.Schema.Types.ObjectId, ref: "Province" }],
  },  
  {
    timestamps: true
  }
)

export const University = mongoose.model('University', universitySchema);