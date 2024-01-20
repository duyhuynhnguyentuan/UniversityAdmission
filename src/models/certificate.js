const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
    linkCertificate: {
      type: Number,
      require: true
    },
    startDate: {
      type: String,
      require: true
    },
    expiredDate: {
      type: String,
      require: true
    },
  },
  {
    timestamps: true
  }
)

 const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate