const express = require('express')
const app = express()

let todos = []

app.get('/', (req, res) => {

  let items = ''
  for (let i = 0; i < todos.length; i++) {
    items += `<li> ${todos[i]} <a href="/${i}/delete">❌</a> </li> \n`
  }


  res.send(`
  <form action="/add">
    <input name="task">
    <input type="submit">
  </form>
  <br>
  <ol start="0">
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

app.get('/:id/delete', (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    res.send('Error: id not numerical')
  } else {
    if (todos[req.params.id]) {
      todos.splice(req.params.id, 1)
      res.redirect('/')
    } else {
      res.send('Error: No task on this index')
    }
  }
})



app.listen(4444, () => {
  console.log('Started')
})
