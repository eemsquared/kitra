const fs = require('fs')
const { connection: db } = require('../services/db')

let sql = fs.readFileSync("db/data.sql", {
    encoding: 'utf8'
})

db.query(sql, (err) => {    
    console.log("Seeding database...")

    if (err) {
        console.error("Error executing SQL query.", err)
        return
    }
})

db.end()

