const express = require('express')
const request = require('request')
const app = express()

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <style>
        h1 {
          color: red;
        }
      </style>
    </head>
    <body>
      <h1>Hello</h1>
      <h2>Welcome to my server</h2>
      <img src="/logo">
    </body>
  </html>
  `)
})

app.get('/x', (req, res) => {
  res.send("Welcome to my server!")
})

app.get('/logo', (req, res) => {
  res.sendFile(__dirname + '/google-logo.png')
})

app.get('/google', (req, res) => {
  res.redirect('https://www.google.com')
})

app.get('/example', (req, res) => {

  request('http://example.com', (err, resp, body) => {
    res.send(body)
  })

})

app.get('/greet/:name/:greeting', (req, res) => {
  console.log(req.params)
  let greeting = req.params.greeting
  res.send(` Good ${greeting} ${req.params.name}`)
})

// http://localhost:3333/greet?name=Jane&greeting=Hi
app.get('/greet', (req, res) => {
  console.log(req.query)
  let name = 'Guest'
  if (req.query.name) { name = req.query.name }
  let greeting = 'Hello'
  if (req.query.greeting) { greeting = req.query.greeting }

  res.send(`${greeting} ${name}`)
})


app.listen(3333, () => {
  console.log('server started')
})

app.listen(3334, () => {
  console.log('server started')
})
