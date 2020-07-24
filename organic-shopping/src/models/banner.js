const mongoose = require('mongoose');

const Banner = mongoose.model('Banner', {
    caption: {
        type: String,
        default: "",
        trim: true
    }, 
    imageUrl: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Banner