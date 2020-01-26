const fs = require('fs')
const os = require('os')
// os.EOL

let arr = []

fs.readFile(__dirname + '/input1.txt',(err,data) => {
    arr = arr.concat(data.toString().split(os.EOL))

    fs.readFile(__dirname + '/input2.txt',(err,data) => {
        arr = arr.concat(data.toString().split(os.EOL))

        fs.readFile(__dirname + '/input3.txt',(err,data) => {
            arr = arr.concat(data.toString().split(os.EOL))

            arr = arr.sort((a,b) => a - b)

            fs.writeFile(__dirname + '/output.txt',arr.join(os.EOL),(err) => {
                console.log(arr)
                if(err) throw err
                console.log('Done')
            })
        })
    })
})
