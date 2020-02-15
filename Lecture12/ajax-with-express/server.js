const express = require('express')

const app = express()

app.get('/', express.static(__dirname + '/public'))

app.listen(5555, () => {
    console.log('Server started')
})