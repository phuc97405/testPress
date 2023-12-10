const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/press_dev"
    );
    // .connect("mongodb://localhost:27017/press_dev")
    console.log("Connected!");
  } catch (error) {
    log;
    console.log("Error connecting");
  }
}
module.exports = { connect };
