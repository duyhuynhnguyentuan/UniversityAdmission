const mongoose = require('mongoose')

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

const CertificateType = mongoose.model('CertificateType', certificateTypeSchema);
module.exports = CertificateType