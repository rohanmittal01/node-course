const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users/register', async (req, res) => {
    // console.log(req.body)
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    // user.save().then(() => {
    //     res.status(201)
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(400)
    //     res.send(e)
    // })
})

router.post('/users/login', async (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(400).send()
    }
})

router.get('/users', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500)
        res.send()
    }
})

router.get('/users/:id', async (req,res) => {
    const _id = req.params.id

    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }

})

router.patch('/users/:id', async (req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})

module.exports = router