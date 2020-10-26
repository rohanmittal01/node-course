const express = require('express')
const Bank = require('../models/bank')
const router = new express.Router()

router.post('/bank', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const bank = new Bank(req.body)
    bank.save().then(() => {
        res.status(201)
        res.send(bank)
    }).catch((e) => {
        res.status(400)
        res.send(e)
        console.log(e)
    })
})

router.get('/bank', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Bank.find({}).then((bank) => {
        res.send(bank)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

router.get('/bank/:id', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
        try{
            const category = await Bank.find({S_id: _id})
            if(!category){
                return res.status(404).send()
            }
            res.status(200).send(category)
        }catch(e){
            res.status(500).send(e)
        }
})

router.patch('/bank/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const category = await Bank.findOneAndUpdate({S_id: _id}, req.body, {new: true, runValidators: true})
        if(!category){
            return res.status(404).send()
        }
        res.send(category)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/bank/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const category = await Bank.findOneAndDelete({S_id: _id});
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