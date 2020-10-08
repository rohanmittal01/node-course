const express = require('express')
const Farmers = require('../models/farmers')
const router = new express.Router()


router.get('/farmers', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Farmers.find({}).then((farmers) => {
        res.send(farmers)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/farmers/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const farmers = await Farmers.findById(_id)
            if(!farmers){
                return res.status(404).send()
            }
            res.status(200).send(farmers)
        }catch(e){
            res.status(500).send(e)
        }
})

router.post('/farmers', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const farmers = new Farmers(req.body)
    farmers.save().then(() => {
        res.status(201)
        res.send(farmers)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

module.exports = router