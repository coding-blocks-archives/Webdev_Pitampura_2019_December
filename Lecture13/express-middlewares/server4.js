const express = require('express')
const app = express()

function decrypt(str) {

}

app.use((req, res, next) => {
    for (let q in req.query) {
        req.query[q] = decrypt(req.query[q])
    }
    next()
})

app.use((req, res, next) => {
    if (!req.query.name)  {
        req.query.name = 'Guest'
    }
    next()
})

app.get('/hello', (req, res) => {
    res.send('Hello ' + req.query.name)
})

app.get('/bye', (req, res) => {
    res.send('Goodbye ' + req.query.name)
})

app.listen(3434, () => {
    console.log('started')
})