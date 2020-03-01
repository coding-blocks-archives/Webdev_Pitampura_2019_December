const express = require('express')
const { db } = require('./data/db')
const apiRoute = require('./routes/api').route

const app = express()

app.use(express.json())
app.use('/api', apiRoute)


db.sync().then(() => {
  app.listen(7878, () => {
    console.log('started on http://localhost:7878')
  })
})
