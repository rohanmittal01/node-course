const express = require('express')
const Task = require('../models/task.js')
const auth = require('../middleware/auth')
const router = new express.Router()


///////Create task//////////
router.post('/task',auth,async (request,response)=>{
   // const task = await new Task(request.body)
   
   
   // task.save().then(()=>{
    //     response.status(201).send(task)
    // }).catch((error)=>{
    //     response.status(400).send(error)
    // })

    const task = new Task({
        ...request.body,
        owner: request.user._id
    }) 
    try{
        await task.save()
        response.status(201).send(task)
    }catch(error){
        response.status(400).send(error)
    }


})
/////////Find all tasks with completed:true////////
/////GET /task/filter/limit=10&skip=10
router.get('/task/filter',auth,async (request,response)=>{
    // Task.find({}).then((task)=>{
    //     response.send(task)
    // }).catch((error)=>{
    //     response.status(500).send()
    // })

    const match = {}
    const sort={}
    if(request.query.completed){
        match.completed = request.query.completed === 'true'
    }

    if(request.query.sortBy){
        const parts = request.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1: 1
    }
    try{
       // const tasks = await Task.find({owner: request.user._id})
       await request.user.populate({
           path:'tasks',
           match: match,
           options:{
            limit: parseInt(request.query.limit),
            skip: parseInt(request.query.skip),
            sort: sort
           }

        }).execPopulate()
       response.send(request.user.tasks)
    }catch(error){
        response.status(500).send(error)
    }
})

/////////Find all tasks//////////
router.get('/task',auth,async (request,response)=>{
    // Task.find({}).then((task)=>{
    //     response.send(task)
    // }).catch((error)=>{
    //     response.status(500).send()
    // })


    try{
       // const tasks = await Task.find({owner: request.user._id})
       await request.user.populate('tasks').execPopulate()
       response.send(request.user.tasks)
    }catch(error){
        response.status(500).send(error)
    }
})

//////////Find task by id////////
router.get('/task/:id',auth,async (request,response)=>{
    const _id = await request.params.id
    // Task.findById(_id).then((task)=>{
    //     if(!task){
    //         return response.status(404).send()
    //     }
        
    //     response.send(task)
    // }).catch((error)=>{
    //     response.status(500).send()
    // })


    try{
       // const task = await Task.findById(_id)
       const task = await Task.findOne({_id, owner: request.user._id})
       
       if(!task){
            return response.status(404).send()
        }
        response.send(task)
    }catch(error){
        response.status(500).send()
    }

})

//////////Find and Update Task/////////////
router.patch('/task/:id',auth,async (request,response)=>{
    const updates = Object.keys(request.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        response.status(400).send('error: Invalid updates')
    }
    try{
        const task = await Task.findById({_id: request.params.id, owner: request.user._id})
       // const task = await Task.findByIdAndUpdate(request.params.id, request.body,{new:true, runValidators:true})
        if(!task){
            return response.status(404).send()
        }
        updates.forEach((update)=>{
            task[update] = request.body[update]
        })
        await task.save()
        response.send(task)
    }catch(error){
        response.status(400).send()
    }
})

/////////Find and Delete Task///////////
router.delete('/task/:id',auth,async (request,response)=>{
    try{
        const task = await Task.findOneAndDelete({_id: request.params.id, owner:request.user._id})
        if(!task){
            return response.status(404).send('error: Did not find any element with that ID')
        }
        response.send(task)
    }catch(error){
        response.status(500).send(error)
    }
})



module.exports = router