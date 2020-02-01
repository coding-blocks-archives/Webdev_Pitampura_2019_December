const fs = require('fs').promises

let readResult1 = fs.readFile('./input1.txt')

console.log('file reading')

readResult1.then((data) => {
  console.log(data.toString())
})
readResult1.catch((err) => {
  console.error(err)
})

console.log('file has been read')
