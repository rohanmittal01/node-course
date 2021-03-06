const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port '+port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({email: 'rohanmittal01@gmail.com'}, 'thisismynewcourse')
    console.log(token)
}

myFunction()