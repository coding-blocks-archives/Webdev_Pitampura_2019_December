const express = require('express')
const app = express()

app.set('view engine', 'hbs')

let todos = [
    {name: 'first task', done: false},
    {name: 'another task', done: true},
    {name: 'third task', done: true},
    {name: 'one more task', done: false},
]

// These are middlewares that help parse the req.body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req, res) => {
    res.render('todo', {
        title: 'Todo List',
        todos: todos
    })
})


app.post('/add', (req, res) => {
    console.log('POST /add')
    console.log(req.body)
    if (req.body.newtask) {
        todos.push({
            name: req.body.newtask,
            done: false
        })
    }
    res.redirect('/')
})

app.listen(5432, () => {
    console.log('started on http://localhost:5432')
})