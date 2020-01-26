const fs = require('fs')

fs.readFile('mytext.txt',(err,data) => {
    if(err) throw err

    console.log(data.toString())
})