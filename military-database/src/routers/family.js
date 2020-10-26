const express = require('express')
const Family = require('../models/family')
const router = new express.Router()

router.post('/family', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const family = new Family(req.body)
    family.save().then(() => {
        res.status(201)
        res.send(family)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/family', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Family.find({}).then((family) => {
        res.send(family)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/family/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Family.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/family/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Family.findOneAndUpdate({S_id: _id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/family/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Family.findOneAndDelete({S_id: _id});
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