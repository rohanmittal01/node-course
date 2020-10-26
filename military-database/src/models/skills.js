const mongoose = require('mongoose')

const skills = mongoose.model('skills', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true
    },
    sprint_speed: {
        type: String,
        required: true,
        trim: true
    },
    climb_speed: {
        type: String,
        required: true,
        trim: true
    },
    aiming_score: {
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = skills