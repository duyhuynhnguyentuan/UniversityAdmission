const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     CertificateType:
 *       type: object
 *       required:
 *         - certificateType
 *         - description 
 *       properties:
 *         certificateType:
 *           type: string
 *           default: "truong hoc FPT"
 *         description:
 *           type: string
 *           default: "ielts"
 *     CertificateTypeResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         certificateType:
 *           type: string
 *         description:
 *           type: string
 */

const certificateTypeSchema = new mongoose.Schema(
  { 
    certificateType: {
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