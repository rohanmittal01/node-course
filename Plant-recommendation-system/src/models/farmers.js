const mongoose = require("mongoose");
const validator = require("validator");

const Farmers = mongoose.model("Delivery Persons", {
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    required: true,
  },
  address: {
    addressLine1: {
      type: String,
      required: true,
      trim: true,
    },
    addressLine2: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
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
  isActive: {
    type: Boolean,
    required: true,
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
  }
});

module.exports = Farmers;
