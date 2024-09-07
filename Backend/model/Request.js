const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
  
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
    bloodUnit: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    donationCenter : {
      type : String,
      required : true
    },
    district : {
      type : String,
      required : true
    },
    deadline: {
      type: Date,
      required: true,
    },
    isClosed : {
      type : Boolean,
      default : false
    },
    donors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Donor",
      },
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Add indexing to optimize queries based on deadline and isClosed fields
requestSchema.index({ deadline: 1, isClosed: 1 });
module.exports = mongoose.model("Request", requestSchema);
