const express = require('express')
const request = require('request')
const app = express()

app.get('/', (req, res) => {
  res.send(`
  <html>
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



app.listen(3333, () => {
  console.log('server started')
})

app.listen(3334, () => {
  console.log('server started')
})
