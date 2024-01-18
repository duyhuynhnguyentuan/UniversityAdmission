import mongoose from 'mongoose';

const certificateTypeSchema = mongoose.Schema(
  { 
    certificateId: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    certificate: [{ type: mongoose.Schema.Types.ObjectId, ref: "Certificate" }],
  },
  {
    timestamps: true
  }
)

export const CertificateType = mongoose.model('CertificateType', certificateTypeSchema);