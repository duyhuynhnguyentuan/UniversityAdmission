const mongoose = require('mongoose')

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