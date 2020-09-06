const mongoose = require("mongoose");
const validator = require("validator");

const Cart = mongoose.model("Shopping Cart", {
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  items: [
    {
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
      quantity: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
          if (value < 0) {
            throw new Error("Quantity must be a positive integer");
          }
        },
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
          if (value < 0) {
            throw new Error("Total Price must be a positive integer");
          }
        },
      },
    },
  ],
});

module.exports = Cart;
