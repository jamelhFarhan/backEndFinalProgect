const mongoose = require("mongoose");
require('dotenv').config()
console.log(process.env.MONGO_URL) 
mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
