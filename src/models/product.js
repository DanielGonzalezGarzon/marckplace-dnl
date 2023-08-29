const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;