const express = require('express')
const routes = express.Router()
const Usuario = require('./controlers/usuarios.controlers')

routes.get('/', Usuario.index)
routes.post('/api/usuarios', Usuario.create)


module.exports = routes