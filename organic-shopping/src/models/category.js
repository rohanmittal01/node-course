const mongoose = require('mongoose')
const validator = require('validator')

const Category = mongoose.model('Category', {
    key: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Category