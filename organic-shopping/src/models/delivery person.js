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
   isActive: {
       type: Boolean,
       required: true
   } 
})

module.exports = DeliveryPerson