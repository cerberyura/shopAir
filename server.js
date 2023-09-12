const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// для парсинга application/json
 app.use(express.json())
// для парсинга application/x-www-form-urlencoded
 app.use(express.urlencoded({extended: true}))
// Шлях до папке з фото
app.use("/static", express.static(__dirname + "/assets"))

app.use('/api/planes', require('./routes/planes'))

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    app.listen(port, () => {
      console.log(`App listen port  + ${port}`)
    })
  })