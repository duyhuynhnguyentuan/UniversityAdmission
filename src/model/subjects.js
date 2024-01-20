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
    subjectGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubjectGroup" }],
    mainSubject: [{ type: mongoose.Schema.Types.ObjectId, ref: "MainSubject" }],
  },
  {
    timestamps: true
  }
)

 const Subjects = mongoose.model('Subjects', subjectSchema);
 module.exports = Subjects