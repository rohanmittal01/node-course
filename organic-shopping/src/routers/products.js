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
        res.send(e)
    })
})

router.get('/products', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Product.find({}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/products/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const product = await Product.findById(_id)
        if(!prodcut){
            return res.status(404).send()
        }
        res.send(product)
    }catch(e){
        res.status(500).send()
    }

})

router.patch('/product/:id', async (req,res) => {
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

module.exports = router