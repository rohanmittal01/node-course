const mongoose = require("mongoose");
const validator = require("validator");

const Product = mongoose.model("Product", {
  Latin_Name: {
    unique: true,
    type: String,
    required: true,
    trim: true,
  },
  Common_Name: {
    type: String,
    required: true,
    trim: true,
  },
  Family_Name: {
    type: String,
    required: true,
    trim: true,
  },
  Plant_Type: {
    type: String,
    required: true,
    trim: true,
  },
  Bloom_Time: {
    type: String,
    required: true,
    trim: true,
  },
  Flower_Color: {
    type: String,
    required: true,
    trim: true,
  },
  Size_at_Maturity: {
    type: String,
    required: true,
    trim: true,
  },
  Suitable_Site_Conditions: {
    type: String,
    required: true,
    trim: true,
  },
  Soil_Type: {
    type: String,
    required: true,
    trim: true,
  },
  Water_Needs: {
    type: String,
    required: true,
    trim: true,
  },
  Appropriate_Location: {
    type: String,
    required: true,
    trim: true,
  },
  Additional_Characteristices_Notes: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Price must be a positive integer");
      }
    },
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: false
  },
  dateAdded: {
    type: Date,
    required: true,
  },
  addedBy: {
    type: String,
    required: true,
    trim: true,
  },
  modifiedDate: {
    type: Date,
    required: true,
  },
  modifiedBy: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Product;