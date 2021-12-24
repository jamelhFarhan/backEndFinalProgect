const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 20 },
  email: { type: String, unique: true, require: true, min: 6, max: 15 },
  password: { type: String, required: true, min: 6, max: 12 },

  Admin: { type: Boolean, default: false },
  LikeRegion: [{ type: mongoose.Schema.Types.ObjectId, ref: "RegionModel" }],
},
{timestamps:true}
);

module.exports = mongoose.model("userModel", userModel);
