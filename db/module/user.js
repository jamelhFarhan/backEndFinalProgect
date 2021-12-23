const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  password2: { type: String },
  Admin:{ type: Boolean , default:false},
  LikeRegion: [{ type: mongoose.Schema.Types.ObjectId, ref: "RegionModel" }],
});

module.exports = mongoose.model("userModel", userModel);
