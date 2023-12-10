const mongoose = require("mongoose");
const { options, use } = require("../../routes/news");
const { userInfo } = require("os");
require("dotenv").config();


async function connect() {
  try {
    // console.log(`MONGODB_URI:, ${pro}`);
    await mongoose.connect(
      'mongodb://atlas-sql-651e77b4f570e15ce79954b8-r8yuh.a.query.mongodb.net/press_dev?ssl=true&authSource=admin',
      {user:'phuc97405',pass:'phuc2023'}
    
    );
    console.log("Connected Mongo Success!");
  } catch (error) {
    console.log(`Error connecting ${error}`);
  }
}
module.exports = { connect };
