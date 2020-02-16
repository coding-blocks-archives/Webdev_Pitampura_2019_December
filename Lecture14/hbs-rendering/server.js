const express = require('express')
const app = express()

app.set('view engine', 'hbs')

let todos = [
    {name: 'first task', done: false},
    {name: 'another task', done: true},
    {name: 'third task', done: true},
    {name: 'one more task', done: false},
]

app.get('/',(req, res) => {
    res.render('todo', {
        title: 'Todo List',
        todos: todos
    })
})

app.listen(5432, () => {
    console.log('started on http://localhost:5432')
})