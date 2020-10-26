const express = require('express')
require('./db/mongoose')
const bodyParser = require('body-parser')


const bank = require('../src/routers/bank')
const equi = require('./routers/equi')
const family = require('./routers/family')
const info = require('./routers/info')
const med = require('./routers/med')
const mess = require('./routers/mess')
const prev_post = require('./routers/prev_post')
const skills = require('./routers/skills')
const sol_login = require('./routers/sol_login')
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(bank)
app.use(equi)
app.use(family)
app.use(info)
app.use(med)
app.use(mess)
app.use(prev_post)
app.use(skills)
app.use(sol_login)

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})