const express = require('express')
const app = express()

function m (req, res, next) {
    console.log(req.url)
    next()
}

function m0 (req, res, next) {
    console.log(req.url)
    console.log('running m0')
    if (req.url != '/1' && req.url != '/2') {
        
        res.send('nothing to see here')
    
    } else {
        next()
    }
}

function m1 (req, res) {
    console.log('running m1')
    res.send('done')
}

function m2 (req, res) {
    console.log('running m2')
    res.send('done')
}

function m3 (req, res) {
    console.log('running m3')
    res.send('done')
}
app.use(m)

app.get('/1', m0, m1)

app.get('/2', m0, m2)

app.get('/3', m0, m3)

app.listen(5656, () => {
    console.log('started on localhost:5656')
})