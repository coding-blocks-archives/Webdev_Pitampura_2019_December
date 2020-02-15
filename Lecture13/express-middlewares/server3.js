const express = require('express')
const app = express()


function m1 (req, res, next) {
    console.log('running m1')
    if (req.query.ret == '1') 
        return res.send('return from m1')
    next()
}
function m2 (req, res, next) {
    console.log('running m2')
    if (req.query.ret == '2') 
        return res.send('return from m2')
    next()
}
function m3 (req, res, next) {
    console.log('running m3')
    if (req.query.ret == '3') 
        return res.send('return from m3')
    next()
}
function m4 (req, res, next) {
    console.log('running m4')
    if (req.query.ret == '4') 
        return res.send('return from m4')
    next()
}
function m5 (req, res, next) {
    console.log('running m5')
    if (req.query.ret == '5') 
        return res.send('return from m5')
    next()
}
function m6 (req, res, next) {
    console.log('running m6')
    if (req.query.ret == '6') 
        return res.send('return from m6')
    next()
}
function m7 (req, res, next) {
    console.log('running m7')
    if (req.query.ret == '7') 
        return res.send('return from m7')
    next()
}

// app.use((req, res, next) => {
//     if (req.url == '/favicon.ico')
//     res.send(null)
//     else 
//     next()
// })

app.use('/a', m1)
app.use('/b', m2)
app.use(m3)
app.use('/a/b', m4)
app.use('/a', m5)
app.use('/a/b/x', m6)
app.use('/a/c', m7)

/*     /a/b/c   */


app.listen(4343, () => {
    console.log('started on http://localhost:4343')
})