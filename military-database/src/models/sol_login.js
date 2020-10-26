const mongoose = require('mongoose')
const validator = require('validator')

const sol_login = mongoose.model('sol_login', {
    S_id: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        requred: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


// sol_login.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({email})
//     if(!user){
//         console.log('errororororo')
//         throw new Error('Email not found')  
//     }

//     const isMatch = await bcrypt.compare(password, user.password)
//     if(!isMatch){
//         throw new Error('Unable to Login')
//     }

//     return user
// }

//Hash the plain text password before saving
// sol_login.pre('save', async function(next){
//     const user = this

//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password, 8)
//     }

//     console.log('just before saving')
//     next()
// })

module.exports = sol_login