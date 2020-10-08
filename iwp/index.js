var express = require("express");
app = express();
app.use(express.json());
bodyparser = require("body-parser");
mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", 
    {useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});

const schema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})
var customerModel = mongoose.model("customers", schema);


app.post('/users', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const _id = req.body.email;
    console.log(req.body)
    customerModel.findOne({email: _id}).then((user) => {
        console.log(user);
        if(user.password != req.body.password){
            return res.status(405).send()
        }
        res.status(200).send(user)
    }).catch((e) => {
        res.status(404).send()
    })
})

app.post('/signup', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req)
    const customer = new customerModel(req.body)
    customer.save(req.body).then(() => {
        res.status(201)
        res.send(customer)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.listen(3000, "localhost", function () {
console.log("server has started");
})