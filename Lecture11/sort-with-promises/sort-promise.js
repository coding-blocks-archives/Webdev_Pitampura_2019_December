const fs = require('fs').promises

fs.readFile('./input1.txt')
  .catch((err) => {
    console.error(err)
  })
  .then((data) => {
    console.log(data.toString())
  })
