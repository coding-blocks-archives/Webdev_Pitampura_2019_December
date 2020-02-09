const express = require('express')
const app = express()

let todos = []

app.get('/', (req, res) => {

  let items = ''
  for (todo of todos) {
    items += `<li> ${todo} </li> \n`
  }


  res.send(`
  <form action="/add">
    <input name="task">
    <input type="submit">
  </form>
  <br>
  <ol>
    ${items}
  </ol>
  `)
})

app.get('/add', (req, res) => {
  if (req.query.task) {
    todos.push(req.query.task)
    res.redirect('/')
  } else {
    res.send('Error: No task defined')
  }
})

app.get('/:id', (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    res.send('Error: id not numerical')
  } else {
    res.send(todos[req.params.id])
  }
})



app.listen(4444, () => {
  console.log('Started')
})
