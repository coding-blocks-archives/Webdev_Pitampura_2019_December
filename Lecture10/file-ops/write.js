const fs = require('fs')

let content = "This is a new content"

console.log('before write')

fs.writeFile('mytext.txt',content,(err) => {
    if(err) throw err

    console.log('successfully written')
})

console.log('after writing')