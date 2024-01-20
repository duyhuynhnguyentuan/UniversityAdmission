const mongoose = require('mongoose');


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
