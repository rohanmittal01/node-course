const mongoose = require('mongoose')
const validator = require('validator')

const Orders = mongoose.model('Order', {
    userId: {
        type: String,
        required: true
    },
    datePlaced: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    shipping: {
        addressLine1: {
            type: String,
            required: true,
            trim: true 
        },
        addressLine2: {
            type: String,
            trim: true 
        },
        city: {
            type: String,
            required: true,
            trim: true 
        },
        state: {
            type: String,
            required: true,
            trim: true 
        },
        country: {
            type: String,
            required: true,
            trim: true 
        },
        name: {
            type: String,
            required: true,
            trim: true 
        }
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
        price: {
            type: Number,
            required: true,
            default: 0,
            validate(value){
                if(value<0){
                    throw new Error('Total Price must be a positive integer')
                }
            }
        }
    }],
    additionalCharges: {
        deliveryCharges: {
            type: Number,
            default: 20
        },
        taxes: {
            type: Number,
            required: true
        }
    },
    quantity: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Order Placed',
        required: true
    },
    deliveryPerson: {
        type: String,
        required: true,
        trim: true
    },
    card: {
       number: {
           type: String,
           required: true,
           trim: true
       },
       name: {
        type: String,
        required: true,
        trim: true
       }
    }
})

module.exports = Orders