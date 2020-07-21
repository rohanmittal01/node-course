const express = require('express')
const Category = require('../models/category')
const router = new express.Router()

router.post('/categories', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const category = new Category(req.body)
    category.save().then(() => {
        res.status(201)
        res.send(category)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

router.get('/categories', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Category.find({}).then((categories) => {
        res.send(categories)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

module.exports = router