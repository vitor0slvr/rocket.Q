const express = require('express')

const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

route.get('/index', (req, res) => res.render('index'))

route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

// fomrmato q o formulario de dentro da modal tem que passar informacoes

route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route
