const mongoose = require("mongoose");
require("dotenv").config();


async function connect() {
  try {
    console.log(`MONGODB_URI:, ${process.env.MONGODB_URI}`);
    await mongoose.connect(
      'mongodb+srv://phuc2023:phuc2023@cluster0.adg3mlb.mongodb.net/?retryWrites=true&w=majority' 
    );
    // .connect("mongodb://localhost:27017/press_dev")
    console.log("Connected!");
  } catch (error) {
    console.log("Error connecting");
  }
}
module.exports = { connect };
