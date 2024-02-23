const mongoose = require("mongoose");

const University_ProvinceSchema = new mongoose.Schema(
  {
    university: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "University"
    }]
  },
  { 
    province: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Province"
    }]
  },
  {
    timestamps: true,
  }
)
const University_Province = mongoose.model('University_Province', University_ProvinceSchema);
 module.exports = University_Province