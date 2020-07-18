const mongoose = require('mongoose')
//const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})

// const me = new user({
//     name:' Rohan  ',
//     email:"  rohaNmittal01@gmail.com",
//     age: 19,
//     password: 'rohan29'
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)

// })



// const task = new Task({
//     description:"Sweep",
//     completed: false
// })

