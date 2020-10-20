const express = require('express')
const DeliveryPerson = require('../models/delivery person')
const router = new express.Router()

router.post('/deliveryperson', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const deliveryperson = new DeliveryPerson(req.body)
    deliveryperson.save().then(() => {
        res.status(201)
        res.send(deliveryperson)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})


router.get('/deliveryperson', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    DeliveryPerson.find({}).then((deliveryperson) => {
        res.send(deliveryperson)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/deliveryperson/available', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    DeliveryPerson.find({isActive: true}).then((deliveryperson) => {
        res.send(deliveryperson)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/deliveryperson/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const deliveryperson = await DeliveryPerson.findById(_id)
            if(!deliveryperson){
                return res.status(404).send()
            }
            res.status(200).send(deliveryperson)
        }catch(e){
            res.status(500).send(e)
        }
})


router.patch('/deliveryperson/:id', async (req,res) => {
    try{
        const deliveryperson = await DeliveryPerson.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!deliveryperson){
            return res.status(404).send()
        }
        res.send(deliveryperson)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/deliveryperson/:id', async (req, res) => {
    try{
        const deliveryperson = await DeliveryPerson.findByIdAndDelete(req.params.id);
        console.log(deliveryperson)
        if(!deliveryperson){
            return res.status(404).send()
        }
        res.send(deliveryperson)
    }catch{
        res.status(500).send()
    }
})

module.exports = router