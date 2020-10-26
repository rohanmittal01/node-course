const mongoose = require('mongoose')

const prev_post = mongoose.model('prev_post', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true
    },
    place: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    }
})

module.exports = prev_post