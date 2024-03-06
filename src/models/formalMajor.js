const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     FormalMajor:
 *       type: object
 *       required:
 *         - name
 *         - code 
 *         - category
 *         - description
 *         - status
 *         - createdDate
 *       properties:
 *         name:
 *           type: string
 *           default: "Cong nghe thong tin"
 *         code:
 *           type: string
 *           default: "CNTT"
 *         category:
 *           type: number
 *           default: 1
 *         description:
 *           type: string
 *           default: "nganh cong nghe thong tin"
 *         status:
 *           type: string
 *           default: "active"
 *         createdDate:
 *           type: string
 *           default: "17/12/2009"
 *     FormalMajorResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         code:
 *           type: string
 *         category:
 *           type: number
 *         description:
 *           type: string
 *         status:
 *           type: string
 *         createdDate:
 *           type: string
 */

const formalMajorSchema = new mongoose.Schema(
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
    createdDate: {
      type: String,
      require: true
    },
    major: [{ type: mongoose.Schema.Types.ObjectId, ref: "Major" }],
  },
  {
    timestamps: true
  }
)

const FormalMajor = mongoose.model('FormalMajor', formalMajorSchema);
module.exports = FormalMajor