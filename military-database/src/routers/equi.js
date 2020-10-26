const express = require('express')
const Equi = require('../models/equi')
const router = new express.Router()

router.post('/equi', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const equi = new Equi(req.body)
    equi.save().then(() => {
        res.status(201)
        res.send(equi)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/equi', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Equi.find({}).then((equi) => {
        res.send(equi)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/equi/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Equi.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.get('/equi/id/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Equi.find({_id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/equi/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Equi.findOneAndUpdate({_id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/equi/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Equi.findOneAndDelete({S_id: _id});
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