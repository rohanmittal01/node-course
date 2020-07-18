const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

////////Without Middleware   new request -> new route identifier
////////With Middleware      new request -> do something -> new route identifier


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})


