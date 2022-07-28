const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const pokemon = require('./models/pokemon.js')

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.listen(port,() => {
    console.log('listening on port' , port)
})