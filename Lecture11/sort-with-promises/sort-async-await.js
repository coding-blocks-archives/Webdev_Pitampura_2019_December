const fs = require('fs').promises
const os = require('os')

async function task() {
  try {
    console.log('read started')
    let p1 = fs.readFile('./input1.txt')
    let p2 = fs.readFile('./input2.txt')
    let p3 = fs.readFile('./input3.txt')

    let data1 = await p1
    console.log('data 1 read')
    let data2 = await p2
    console.log('data 2 read')
    let data3 = await p3
    console.log('data 3 read')

    let sorted = data1.toString().split(os.EOL)
      .concat(data2.toString().split(os.EOL))
      .concat(data3.toString().split(os.EOL))
      .sort((a, b) => a - b)
      .join(os.EOL)

    await fs.writeFile('./output2.txt', sorted)
  } catch (e) {
    console.error(e)
  }
}

task().then(() => {
  console.log('task really done')
})

setInterval(() => {
  console.log('tick')
}, 1)
