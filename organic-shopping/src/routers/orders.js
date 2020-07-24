const express = require('express')
const Orders = require('../models/orders')
const router = new express.Router()

router.post('/orders', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const orders = new Orders(req.body)
    orders.save().then(() => {
        res.status(201)
        res.send(orders)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})


router.get('/orders', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Orders.find({}).then((orders) => {
        res.send(orders)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/orders/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const orders = await Orders.findById(_id)
            if(!orders){
                return res.status(404).send()
            }
            res.status(200).send(orders)
        }catch(e){
            res.status(500).send(e)
        }
})


router.patch('/orders/:id', async (req,res) => {
    try{
        const orders = await Orders.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!orders){
            return res.status(404).send()
        }
        res.send(orders)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/orders/:id', async (req, res) => {
    try{
        const orders = await Orders.findByIdAndDelete(req.params.id);
        console.log(orders)
        if(!orders){
            return res.status(404).send()
        }
        res.send(orders)
    }catch{
        res.status(500).send()
    }
})

module.exports = router