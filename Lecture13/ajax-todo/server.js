const express = require('express')
const app = express()

let todos = [
    'some tasks',
    'more tasks',
    'another sample task'
]

app.use('/', express.static(__dirname + '/public'))

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/todos/add', (req, res) => {
    todos.push(req.query.task)
    res.send(todos)
})


app.listen(3456, () => {
    console.log('started on http://localhost:3456')
})