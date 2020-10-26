const express = require('express')
const Prev_post = require('../models/prev_post')
const router = new express.Router()

router.post('/prev_post', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const prev_post = new Prev_post(req.body)
    prev_post.save().then(() => {
        res.status(201)
        res.send(prev_post)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/prev_post', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Prev_post.find({}).then((prev_post) => {
        res.send(prev_post)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/prev_post/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Prev_post.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.get('/prev_post/id/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Prev_post.find({_id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/prev_post/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Prev_post.findOneAndUpdate({_id: _id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/prev_post/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Prev_post.findOneAndDelete({S_id: _id});
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