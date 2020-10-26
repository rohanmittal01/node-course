const express = require('express')
const Skills = require('../models/skills')
const router = new express.Router()

router.post('/skills', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const skills = new Skills(req.body)
    skills.save().then(() => {
        res.status(201)
        res.send(skills)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/skills', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Skills.find({}).then((skills) => {
        res.send(skills)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/skills/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Skills.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/skills/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Skills.findOneAndUpdate({S_id: _id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/skills/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Skills.findOneAndDelete({S_id: _id});
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