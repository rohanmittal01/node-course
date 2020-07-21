const mongoose = require('mongoose')
const validator = require('validator')

const Cart = mongoose.model('Shopping Cart', {
    userId:{
        type: String,
        required: true
    },
    items: [{
        productId: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
            validate(value){
                if(value<0){
                    throw new Error('Quantity must be a positive integer')
                }
            }
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
            validate(value){
                if(value<0){
                    throw new Error('Total Price must be a positive integer')
                }
            }
        }
    }]
})

module.exports = Cart