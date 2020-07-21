const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const categoryRouter = require('./routers/categories')
const productsRouter = require('./routers/products')
const Product = require('./models/products')
const Orders = require('./models/orders')
const Cart = require('./models/shopping-cart')
// const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000


var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(categoryRouter)
app.use(productsRouter)




app.post('/orders', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const orders = new Orders(req.body)
    orders.save().then(() => {
        res.status(201)
        res.send(orders)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.post('/shopping-cart', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const carts = new Cart(req.body)
    carts.save().then(() => {
        res.status(201)
        res.send(carts)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})


// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)

//     task.save().then(() => {
//         res.status(201)
//         res.send(task)
//     }).catch((e) => {
//         res.status(400)
//         res.send(e)
//     })
// })

// app.get('/tasks', (req,res) => {
//     Task.find({}).then((tasks) => {
//         res.send(tasks)
//     }).catch((e) => {
//         res.status(500).send(e)
//     })
// })

// app.get('/tasks/:id', (req,res) => {
//     const _id = req.params.id

//     Task.findById(_id).then((task) => {
//         if(!task){
//             return res.status(404).send()
//         }
//         res.status(200).send(task)
//     }).catch((e) => {
//         res.status(500).send(e)
//     })
// })

app.listen(port, () => {
    console.log('Server is up on port '+port)
})