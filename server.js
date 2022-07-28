const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.listen(port,() => {
    console.log('listening on port' , port)
})