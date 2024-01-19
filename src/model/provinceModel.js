const mongoose = require('mongoose')

const provinceSchema = mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    university: [{ type: mongoose.Schema.Types.ObjectId, ref: "University" }],
  },
  {
    timestamps: true
  }
)

 const Province = mongoose.model('Province', provinceSchema);
 module.exports = Province