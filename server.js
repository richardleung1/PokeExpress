const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const pokemon = require('./models/pokemon.js')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index.jsx', { pokemon: pokemon })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', { //second param must be an object
        poke: pokemon[req.params.id]
    })
})

app.listen(port,() => {
    console.log('listening on port' , port)
})