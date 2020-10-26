const express = require('express')
const Med = require('../models/med')
const router = new express.Router()

router.post('/med', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const med = new Med(req.body)
    med.save().then(() => {
        res.status(201)
        res.send(med)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/med', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Med.find({}).then((med) => {
        res.send(med)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/med/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Med.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/med/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Med.findOneAndUpdate({S_id: _id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/med/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Med.findOneAndDelete({S_id: _id});
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