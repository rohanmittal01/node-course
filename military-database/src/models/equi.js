const mongoose = require('mongoose')

const equi = mongoose.model('equi', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
    },
    equipment_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = equi