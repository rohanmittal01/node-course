const express = require('express')
const Info = require('../models/info')
const router = new express.Router()

router.post('/info', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const info = new Info(req.body)
    info.save().then(() => {
        res.status(201)
        res.send(info)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/info', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Info.find({}).then((info) => {
        res.send(info)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/info/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Info.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/info/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Info.findOneAndUpdate({S_id: _id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/info/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Info.findOneAndDelete({S_id: _id});
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