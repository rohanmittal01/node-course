const mongoose = require('mongoose')

const bank = mongoose.model('bank', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
        unique: true
    },
    account_number: {
        type: Number,
        required: true,
        trim: true
    },
    IFSC: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
    },
    bank_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = bank