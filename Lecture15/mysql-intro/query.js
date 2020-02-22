const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'mytestuser',
    password: 'mytestpass',
    database: 'mytestdb'
})

conn.execute(
    `SELECT * FROM mysecondtable`,
    (err, rows, cols) => {
        if (err) throw err 

        for (let row of rows) {
            console.log("================")
            for (let col of cols) {
                console.log(col.name, "\t:", row[col.name])
            }
            console.log("================")
        }
    }
)