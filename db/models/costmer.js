const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  type: { type: String, default: "personal" },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("contact", ContactSchema);