const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/users/register', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
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

router.post('/users/login', async (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(400).send('Account not found')
    }
})

router.get('/users', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/users/:id', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

module.exports = router