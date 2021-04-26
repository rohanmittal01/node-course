const express = require('express')
const Orders = require('../models/orders')
const router = new express.Router()
const User = require('../models/user');

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

//To get all Order data
router.get('/orders/admin/:user', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.user
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send('User not found!');
        }
        if(user.isAdmin == true){
            Orders.find({}).then((orders) => {
                res.send(orders)
            }).catch((e) => {
                res.status(500)
                res.send()
            });
        }else{
            return res.status(401).send('Unauthroized!');
        }
    }).catch((e) => {
        res.status(500).send('Oops!');
    })
})

// router.get('/orders/admin/:user', (req,res) => {

//     res.header("Access-Control-Allow-Origin", "*");
//     Orders.find({}).then((orders) => {
//         res.send(orders)
//     }).catch((e) => {
//         res.status(500)
//         res.send()
//     })
// })



router.get('/orders/:user', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.user
    console.log(_id);
        try{
            const orders = await Orders.find({userId: _id})
            if(!orders){
                return res.status(404).send()
            }
            res.status(200).send(orders)
        }catch(e){
            res.status(500).send(e)
        }
})


router.get('/order/id/:id', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
    console.log(_id)
    Orders.findById(_id).then((order) => {
        console.log('hi')
        console.log(order)
        if(!order){
            return res.status(404).send()
        }
        res.status(200).send(order)
    }).catch((e) => {
        res.status(500).send()
    })
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