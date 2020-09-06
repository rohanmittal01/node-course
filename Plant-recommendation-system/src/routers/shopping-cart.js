const express = require('express')
const Cart = require('../models/shopping-cart')
const { ObjectID, ObjectId } = require('mongodb')
const router = new express.Router()

router.post('/shopping-cart', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const cart = new Cart(req.body)
    cart.save().then(() => {
        res.status(201)
        res.send(cart)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})


router.get('/shopping-cart/:id', async (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
    try{
        const cart = await Cart.findOne({userId: _id})
        if(!cart){
            return res.status(404).send()
        }
        res.status(200).send(cart)
    }catch(e){
        res.status(500).send(e)
    }
})

router.patch('/shopping-cart/:id', async (req,res) => {
    try{
        const cart = await Cart.findOneAndUpdate({userId: req.params.id}, req.body, {new: true, runValidators: true})
        if(!cart){
            return res.status(404).send()
        }
        res.send(cart)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/shopping-cart/:id', async (req, res) => {
    try{
        const cart = await Cart.findOneAndDelete({userId: req.params.id});
        console.log(cart)
        if(!cart){
            return res.status(404).send()
        }
        res.send(cart)
    }catch{
        res.status(500).send()
    }
})

module.exports = router