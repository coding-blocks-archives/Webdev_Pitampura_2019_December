// the express library
const express = require('express')
// the http library (comes with nodejs by default)
const http = require('http')
// the socket.io library
const socketio = require('socket.io')

const PORT = process.env.PORT || 5555

// the express app
const app = express()
// the http server created with logic of the app
const server = http.createServer(app)
// the socket.io listener created on the server 
const io = socketio(server)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('connection created', socket.id)

    socket.on('beep', (data) => {
        io.emit('beep', {
            state: data.state,
            id: socket.id
        })
    })

    socket.on('msg_send', (data) => {
        // io.emit('msg_rcvd', data)
        // io.to('<socket id>').emit()
        socket.broadcast.emit('msg_rcvd', data)
    })
})


server.listen(PORT, () => {
    console.log(`started on http://localhost:${PORT}`)
})