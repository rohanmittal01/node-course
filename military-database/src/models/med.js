const mongoose = require('mongoose')

const med = mongoose.model('med', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
        unique: true
    },
    height_cm: {
        type: Number,
        required: true,
        trim: true
    },
    weight_kg: {
        type: Number,
        required: true,
        trim: true
    },
    medicines: {
        type: String,
        required: false
    },
    med_duration: {
        type: String,
        required: false
    }
})

module.exports = med