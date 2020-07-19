const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/practice-node-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



// const me = new User({
//     name: 'Mike',
//     email: 'mike@gmail.coM',
//     password: 'hey there'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error! ', error)
// })



// const task = new Task({
//     info: {
//         description: 'Learn the Mongoose Library'
//     }
//     // completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

