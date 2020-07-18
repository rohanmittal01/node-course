require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

// Task.findByIdAndDelete('5e8a4fe19fd1ca1c5bfef282').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5e8a4ed9ed380b1859e7d6d9').then((count)=>{
    console.log(count)
}).catch((error)=>{
    console.log(error)
})