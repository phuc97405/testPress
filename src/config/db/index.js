const mongoose = require("mongoose");
require("dotenv").config();


async function connect() {
  try {
    // console.log(`MONGODB_URI:, ${pro}`);
    await mongoose.connect(
      'mongodb+srv://phuc2023:phuc2023@cluster0.adg3mlb.mongodb.net/?retryWrites=true&w=majority' 
    );
    // .connect("mongodb://localhost:27017/press_dev")
    console.log("Connected Mongo!");
  } catch (error) {
    console.log(`Error connecting ${error}`);
  }
}
module.exports = { connect };
