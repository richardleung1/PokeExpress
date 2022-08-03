const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon.js')

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// middlewares
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', { 
            pokemon: allPokemon 
        })
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

app.post('/pokemon/', (req, res)=>{
    req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1)
    Pokemon.create(req.body, (error, pokemon)=>{
        res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (error, pokemon) => {
        res.render('Show', { //second param must be an object
            pokemon: pokemon
        })
    })
})

app.listen(port,() => {
    console.log('listening on port' , port)
})