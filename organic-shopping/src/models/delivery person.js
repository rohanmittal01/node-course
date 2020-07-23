const mongoose = require('mongoose')
const validator = require('validator')

const DeliveryPerson = mongoose.model('Delivery Persons', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    dateJoined: {
        type: Date,
        required: true
    },
    address: {
        addressLine1: {
            type: String,
            required: true,
            trim: true 
        },
        addressLine2: {
            type: String,
            trim: true 
        },
        city: {
            type: String,
            required: true,
            trim: true 
        },
        state: {
            type: String,
            required: true,
            trim: true 
        },
        country: {
            type: String,
            required: true,
            trim: true 
        }
    },
   isActive: {
       type: Boolean,
       required: true
   },
   dateAdded: {
       type: Date,
       required: true
   },
   addedBy: {
       type: String,
       required: true,
       trim: true
   },
   modifiedDate: {
       type: Date,
       required: true
   },
   modifiedBy: {
       type: String,
       required: true,
       trim: true
   }
})

module.exports = DeliveryPerson