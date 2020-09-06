const express = require('express')
const Product = require('../models/products')
const router = new express.Router()


router.post('/products', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const products = new Product(req.body)
    products.save().then(() => {
        res.status(201)
        res.send(products)
    }).catch((e) => {
        res.status(400)
        console.log(e)
        res.send(e)
    })
})

router.get('/products/available', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Product.find({isAvailable: true}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/products/all', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Product.find({}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/products/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const product = await Product.findById(_id)
            if(!product){
                return res.status(404).send()
            }
            res.status(200).send(product)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/products/:id', async (req,res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/products/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        console.log(product)
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    }catch{
        res.status(500).send()
    }
})

module.exports = router