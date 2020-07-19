const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body)
    const users = new User(req.body)
    users.save().then(() => {
        res.status(201)
        res.send(users)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.get('/users', (req,res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

app.get('/users/:id', (req,res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.status(201).send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201)
        res.send(task)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})



app.listen(port, () => {
    console.log('Server is up on port '+port)
})