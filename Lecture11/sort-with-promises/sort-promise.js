const fs = require('fs').promises
const os = require('os')

fs.readFile('./input1.txt')
  .then((data1) => {
    fs.readFile('./input2.txt')
      .then((data2) => {
        fs.readFile('./input3.txt')
          .then((data3) => {

            let sorted = data1.toString().split(os.EOL)
              .concat(data2.toString().split(os.EOL))
              .concat(data3.toString().split(os.EOL))
              .sort((a,b) => a - b)
              .join(os.EOL)

            fs.writeFile('./output.txt', sorted)
              .then(() => {
                console.log('sorting done')
              })

          })
      })
  })
