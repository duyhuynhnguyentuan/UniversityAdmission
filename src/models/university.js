const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     University:
 *       type: object
 *       required:
 *         - name
 *         - code 
 *         - abbreviation
 *         - description
 *         - yearEstablished
 *         - admissionPolicy
 *         - contactInfo 
 *         - address 
 *       properties:
 *         name:
 *           type: string
 *           default: "Dai hoc FBT"
 *         code:
 *           type: string
 *           default: "FPT_DB"
 *         abbreviation:
 *           type: string
 *           default: "FPTU"
 *         description:
 *           type: string
 *           default: "Truong dai hoc ve cong nghe dau hang Viet Nam"
 *         yearEstablished:
 *           type: number
 *           default: 2007
 *         admissionPolicy:
 *           type: string
 *           default: "N/A"
 *         contactInfo: 
 *           type: string 
 *           default: "fptcc@gmail.gmail"
 *         address:
 *           type: string 
 *           default: "khu cong nghe cao"
 *     UniversityResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         code:
 *           type: string
 *         abbreviation:
 *           type: string
 *         description:
 *           type: string
 *         yearEstablished:
 *           type: number
 *         admissionPolicy:
 *           type: string
 *         contactInfo: 
 *           type: string 
 *         address:
 *           type: string
 */




const universitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    code: {
      type: String,
      require: true,
    },
    abbreviation: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    yearEstablish: {
      type: Number,
      require: true,
    },
    admissionPolicy: {
      type: String,
      require: true,
    },
    contactInfo: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    major: [{ type: mongoose.Schema.Types.ObjectId, ref: "Major" }],
    admissionPlan: [
      { type: mongoose.Schema.Types.ObjectId, ref: "AdmissionPlan" },
    ],
    province: [{ type: mongoose.Schema.Types.ObjectId, ref: "Province" }],
  },
  {
    timestamps: true,
  }
);
const University = mongoose.model("University", universitySchema);
module.exports = University;
