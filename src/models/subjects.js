const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema(
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
)

 const Subjects = mongoose.model('Subjects', subjectSchema);
 module.exports = Subjects