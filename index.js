const express = require('express')
const app = express()
const config = require('./config')
const port = config.db.port

const treasuresRouter = require('./routes/treasures')
const usersRouter = require('./routes/users')

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.json({ message: "OK!" })
})

app.use('/treasures', treasuresRouter)
app.use('/users', usersRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({ message: err.message })
    return
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
