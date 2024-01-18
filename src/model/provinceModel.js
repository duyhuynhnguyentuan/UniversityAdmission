import mongoose from 'mongoose';

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

export const Province = mongoose.model('Province', provinceSchema);