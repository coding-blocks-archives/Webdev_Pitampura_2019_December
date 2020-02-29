const express = require('express')
const session = require('express-session')

const app = express()
app.set('view engine', 'hbs')

app.use(session({
    secret: 'a long unguessable string here',
    resave: false,
    saveUninitialized: true
}))

app.get('/view', (req, res) => {
    console.log(req.session)
    if (req.session.count) {
        req.session.count++
    } else {
        req.session.count = 1
    }
    req.session.save()
    res.render('viewcounter', {
        count: req.session.count
    })
})


app.listen(3131, () => {
    console.log('started on http://localhost:3131/')
})