const express = require('express')
const Category = require('../models/category')
const router = new express.Router()

router.post('/categories', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const category = new Category(req.body)
    category.save().then(() => {
        res.status(201)
        res.send(category)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
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

router.get('/categories/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Category.findById(_id)
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})


router.patch('/categories/:id', async (req,res) => {
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/categories/:id', async (req, res) => {
    try{
        const category = await Category.findByIdAndDelete(req.params.id);
        console.log(category)
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch{
        res.status(500).send()
    }
})

module.exports = router