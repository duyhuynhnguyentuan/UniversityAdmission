const mongoose = require('mongoose');

// Assuming 'MainSubject' is your model name
delete mongoose.connection.models['MainSubject'];

const MainSubjectSchema = mongoose.Schema(
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
