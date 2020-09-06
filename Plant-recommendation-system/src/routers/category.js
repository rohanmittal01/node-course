const mongoose = require('mongoose')
const validator = require('validator')

const Category = mongoose.model('Category', {
    key: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dateAdded: {
        type: Date,
        required: true
    },
    addedBy: {
        type: String,
        required: true,
        trim: true
    },
    modifiedDate: {
        type: Date,
        required: true
    },
    modifiedBy: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Category