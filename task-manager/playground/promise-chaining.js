const mongoose = require('mongoose')
require('../src/db/mongoose.js')
const User = require('../src/models/user')

//5e89efa445ba934366cd0ade

// User.findByIdAndUpdate('5e89efa445ba934366cd0ade',{age:10}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:19})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const updateAgeAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id, {age:age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5e89efa445ba934366cd0ade',21).then((count)=>{
    console.log(count)
}).catch((error)=>{
    console.log(error)
})