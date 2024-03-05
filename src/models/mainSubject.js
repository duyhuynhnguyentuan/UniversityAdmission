const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     MainSubject:
 *       type: object
 *       required:
 *         - name
 *         - score 
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           default: "cong nghe thong tin"
 *         score:
 *           type: number
 *           default: 9
 *         description:
 *           type: string
 *           default: "cong nghe thong tin"
 *     MainSubjectResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         score:
 *           type: number
 *         description:
 *           type: string
 */

const MainSubjectSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    score: {
      type: Number,
      require: true
    },
    description: {
      type: String,
      require: true
    },
  },
  {
    timestamps: true
  }
);

const MainSubject = mongoose.model('MainSubject', MainSubjectSchema);
module.exports = MainSubject;
