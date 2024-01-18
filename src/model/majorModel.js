import mongoose from 'mongoose';

const majorSchema = mongoose.Schema(
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
    majorInPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: "MajorInPlan" }],
  },
  {
    timestamps: true
  }
)

export const Major = mongoose.model('Major', majorSchema);