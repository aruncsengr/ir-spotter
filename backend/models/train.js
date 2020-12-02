const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    }
  },
  {
    timestamps: true
  }
);

const Train = mongoose.model("Train", trainSchema);

module.exports = Train;
