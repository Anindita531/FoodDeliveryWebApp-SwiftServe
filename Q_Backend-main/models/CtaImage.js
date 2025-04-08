const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("CtaImage", ImageSchema); // Correct name
