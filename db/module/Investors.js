const mongoose = require("mongoose");
const InvestorsModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  price: { type: String},
  month: {type: String},
  user:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"}
},
{timestamps:true});

module.exports = mongoose.model("InvestorsModel", InvestorsModel);