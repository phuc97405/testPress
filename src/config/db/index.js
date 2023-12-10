const mongoose = require("mongoose");
require("dotenv").config();


async function connect() {
  try {
    // console.log(`MONGODB_URI:, ${pro}`);
    await mongoose.connect(
      'mongodb+srv://phuc2023:phuc2023@cluster0.adg3mlb.mongodb.net/?retryWrites=true&w=majority' ,
      // 'mongodb://atlas-sql-651e77b4f570e15ce79954b8-r8yuh.a.query.mongodb.net/press_dev?ssl=true&authSource=admin'
    );
    // .connect("mongodb://localhost:27017/press_dev")
    console.log("Connected Mongo!");
  } catch (error) {
    console.log(`Error connecting ${error}`);
  }
}
module.exports = { connect };
