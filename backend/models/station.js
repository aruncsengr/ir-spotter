const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2
    }
  },
  {
    timestamps: true
  }
);

const Station = mongoose.model("Station", stationSchema);

module.exports = Station;
