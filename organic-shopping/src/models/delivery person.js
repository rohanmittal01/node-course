const mongoose = require('mongoose')
const validator = require('validator')

const DeliveryPerson = mongoose.model('Delivery Persons', {
    name: {
        type: String,
        required: true,
        trim: true
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
   } 
})

module.exports = DeliveryPerson