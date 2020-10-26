const mongoose = require('mongoose')
const validator = require('validator')

const info = mongoose.model('info', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    posting_address: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    service_category: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    contact_number: {
        type: Number,
        required: true,
        trim: true
    },
    mess_name: {
        type: String,
        required: true
    }
})

module.exports = info