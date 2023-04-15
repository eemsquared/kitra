const express = require('express')
const router = express.Router()

const { connectionPool: pool } = require('../services/db')
const { userSchema } = require('../services/schema') 
const schema = require('../services/schemaValidator')

router.post('/', (req, res) => {
    let { name, age, password, email } = req.body
        age = parseInt(age)

    const isValid = schema.validate(userSchema, { name, age, password, email })
    if (!isValid) {
        return res.status(400).json({ error: ajv.errors })
    }

    let q = `
        INSERT INTO users (name, age, password, email)
        VALUES
        ('${name}', ${age}, '${password}', '${email}')
    `

    pool.getConnection((err, conn) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        conn.query(q, (err, rows) => {
            conn.release()
            if (err) {
                return res.status(500).json({ error: err.message })
            }

            let message = 'Error in creating user.'
            let status = 500

            if (rows.affectedRows) {
                message = 'Successfully created new user.'
                status = 200
            }

            res.status(status).json({ message})
        })
    })

})

module.exports = router