const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))

route.get('/', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('creater-pass'))

module.exports = route
