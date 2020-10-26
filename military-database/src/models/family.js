const mongoose = require('mongoose')

const family = mongoose.model('family', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
        unique: true
    },
    father_name: {
        type: String,
        required: true
    },
    spouse_name: {
        type: String,
        required: false
    },
    contact_number: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = family