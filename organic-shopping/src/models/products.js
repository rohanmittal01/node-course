const mongoose = require('mongoose')
const validator = require('validator')

const Product = mongoose.model('Product', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Price must be a positive integer')
            }
        }
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

module.exports = Product