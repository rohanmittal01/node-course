const express = require('express')
const Banner = require('../models/banner')
const router = new express.Router()

router.post('/banner', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const banner = new Banner(req.body)
    banner.save().then(() => {
        res.status(201)
        res.send(banner)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})


router.get('/banner', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Banner.find({}).then((banner) => {
        res.send(banner)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/banner/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const banner = await Banner.findById(_id)
            if(!banner){
                return res.status(404).send()
            }
            res.status(200).send(banner)
        }catch(e){
            res.status(500).send(e)
        }
})


router.patch('/banner/:id', async (req,res) => {
    try{
        const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!banner){
            return res.status(404).send()
        }
        res.send(banner)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/banner/:id', async (req, res) => {
    try{
        const banner = await Banner.findByIdAndDelete(req.params.id);
        console.log(banner)
        if(!banner){
            return res.status(404).send()
        }
        res.send(banner)
    }catch{
        res.status(500).send()
    }
})

module.exports = router