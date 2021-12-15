const mongoose = require("mongoose");
const InvestorsModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  price: { type: String},
  user:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"}
});

module.exports = mongoose.model("InvestorsModel", InvestorsModel);