const express = require('express')
const session = require('express-session')
const { db, Users } = require('./db')

const app = express()
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: 'a long unguessable string here',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false
    }
  })
)

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

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', async (req, res) => {
  const user = await Users.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    name: req.body.name
  })
  res.redirect('/login')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', async (req, res) => {
  const user = await Users.findOne({
    where: {
      username: req.body.username
    }
  })

  if (!user) {
    res.send('Wrong username')
    return
  }

  if (user.password != req.body.password) {
    res.send('Wrong password')
    return
  }

  req.session.username = user.username
  req.session.save()

  res.redirect('/profile')
})

app.get('/profile', async (req, res) => {
  if (!req.session.username) {
    res.redirect('/login')
    return
  }

  const user = await Users.findOne({
    where: {
      username: req.session.username
    }
  })

  res.render('profile', { user })
})

db.sync().then(() => {
  app.listen(3131, () => {
    console.log('started on http://localhost:3131/')
  })
})
