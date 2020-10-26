const express = require('express')
const Mess = require('../models/mess')
const router = new express.Router()

router.post('/mess', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const mess = new Mess(req.body)
    mess.save().then(() => {
        res.status(201)
        res.send(mess)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/mess', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Mess.find({}).then((mess) => {
        res.send(mess)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/mess/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Mess.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/mess/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Mess.findOneAndUpdate({S_id: _id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/mess/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Mess.findOneAndDelete({S_id: _id});
        console.log(category)
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch{
        res.status(500).send()
    }
})

module.exports=router