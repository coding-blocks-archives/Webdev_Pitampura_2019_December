// the express library
const express = require('express')
// the http library (comes with nodejs by default)
const http = require('http')
// the socket.io library
const socketio = require('socket.io')

// the express app
const app = express()
// the http server created with logic of the app
const server = http.createServer(app)
// the socket.io listener created on the server 
const io = socketio(server)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('connection created', socket.id)

    socket.on('beep', () => {
        console.log('beep received from', socket.id)
    })
})


server.listen(5555, () => {
    console.log('server started')
})