const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Category = require('./models/category')
const Product = require('./models/products')
const Orders = require('./models/orders')
const Cart = require('./models/shopping-cart')
// const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const users = new User(req.body)
    users.save().then(() => {
        res.status(201)
        res.send(users)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})


app.get('/users', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

app.get('/users/:id', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})


app.post('/categories', (req, res) => {
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

app.get('/categories', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Category.find({}).then((categories) => {
        res.send(categories)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

app.post('/products', (req, res) => {
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

app.get('/products', (req,res) => {

    res.header("Access-Control-Allow-Origin", "*");
    Product.find({}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(500)
        res.send()
    })
})

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