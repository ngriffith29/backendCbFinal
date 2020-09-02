require('dotenv').config()
const express = require('express')

const app = express()
let port = process.env.PORT || 3000;
const mongoose = require('mongoose')
var cors = require('cors')
mongoose.connect('mongodb+srv://ngriffith29:naG*0782@cbcheckout.wmih8.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error)  => console.error(error))
db.once('open', () => console.log('connected to db :)'))

app.use(cors())
app.use(express.json() )


const studentRouter = require('./routes/StudentRoute')
const forgotRouter = require('./routes/forgot')
const lifetimeRouter = require('./routes/lifetimedead')

app.use('/students', studentRouter)

app.use('/forgot', forgotRouter)

app.use('/lifetime', lifetimeRouter)

app.listen(port, () => console.log('server started'))

