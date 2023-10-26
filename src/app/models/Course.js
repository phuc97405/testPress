const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "", maxLength: 255 },
  description: { type: String, default: "", maxLength: 600 },
  image: { type: String, default: "", maxLength: 255 },
  updatedAt: { type: Date, default: Date.now() },
  createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Course", Course);
 