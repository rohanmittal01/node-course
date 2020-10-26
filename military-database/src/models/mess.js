const mongoose = require('mongoose')

const mess = mongoose.model('mess', {
    mess_name: {
        type: String,
        required: true,
        unique: true
    },
    soldiers_serving: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = mess