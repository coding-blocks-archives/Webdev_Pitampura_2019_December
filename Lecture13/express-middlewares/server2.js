const express = require('express')

const app = express()

function a(req, res, next) {
    console.log('running a')
    next()
}

app.use('/a', a)

app.get('/a/b', (req, res) => {
    res.send('you are on /a/b')
})

app.get('/a/c', (req, res) => {
    res.send('you are on /a/c')
})


app.listen(4545, () => {
    console.log('started on http://localhost:4545')
})