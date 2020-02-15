const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/abc', express.static('./public'))

app.listen(5555, () => {
    console.log('Server started')
})