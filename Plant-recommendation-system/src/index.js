const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')
const userRouter = require('./routers/user')
const categoryRouter = require('./routers/categories')
const productsRouter = require('./routers/products')
const deliveryPersonRouter = require('./routers/deliveryperson')
const cartRouter = require('./routers/shopping-cart')
const mailRouter = require('./routers/mail')
const orderRouter = require('./routers/orders')
const Orders = require('./models/orders')
const bannerRouter = require('./routers/banner') 
const Cart = require('./models/shopping-cart')
const farmersRouter = require('./routers/farmers')
// const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000


var cors = require('cors')
app.use(cors())
app.use(bodyParser({limit: '50mb'}));
app.use(express.json())
app.use(userRouter)
app.use(categoryRouter)
app.use(productsRouter)
app.use(deliveryPersonRouter)
app.use(cartRouter)
app.use(bannerRouter)
app.use(mailRouter)
app.use(orderRouter);
app.use(farmersRouter);
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