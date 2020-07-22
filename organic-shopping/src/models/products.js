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
    }
})

module.exports = Product