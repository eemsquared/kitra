const express = require('express')
const router = express.Router()

const { connectionPool: pool } = require('../services/db')
const { treasureSchema } = require('../services/schema') 
const schema = require('../services/schemaValidator')

router.get('/', async (req, res) => {
    let { latitude, longitude, distance, amt } = req.query
        latitude = parseFloat(latitude)
        longitude = parseFloat(longitude)
        distance = parseInt(distance)
        amt = amt ? parseInt(amt) : undefined

    const isValid = schema.validate(treasureSchema, { latitude, longitude, distance, amt })
    if (!isValid) {
        return res.status(400).json({ error: ajv.errors })
    }

    let q = `
        SELECT treasures.id, latitude, longitude, money_values.treasure_id, money_values.amt
        FROM treasures
        INNER JOIN money_values ON treasures.id = money_values.treasure_id
        WHERE ST_Distance_Sphere(
            POINT(${longitude}, ${latitude}),
            POINT(longitude, latitude)
        ) <= ${distance * 1000}
    `

    if (amt !== undefined) {
        q += ` AND money_values.amt = ${amt}`;
    }
    
    pool.getConnection((err, conn) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        conn.query(q, (err, rows, fields) => {
            conn.release()

            if (err) {
                return res.status(500).json({ error: err.message })
            }

            res.json({ count: rows.length, data: rows })
        })
    })

})

module.exports = router