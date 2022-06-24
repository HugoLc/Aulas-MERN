const express = require('express')
const routes = express.Router()
const Usuario = require('./controlers/usuarios.controlers')
const Produto = require('./controlers/produtos.controlers')

routes.get('/', Usuario.index)

routes.post('/api/usuarios', Usuario.create)
routes.post('/api/usuarios/login', Usuario.login)
routes.post('/api/usuarios/checktoken', Usuario.checktoken)
routes.get('/api/usuarios', Usuario.index)
routes.get('/api/usuarios.details/:_id', Usuario.details)
routes.delete('/api/usuarios.delete/:_id', Usuario.delete)
routes.put('/api/usuarios.update', Usuario.update)


routes.get('/p', Produto.index)

routes.post('/api/p', Produto.create)
routes.get('/api/p.details/:_id', Produto.details)
routes.delete('/api/p.delete/:_id', Produto.delete)
routes.put('/api/p.update', Produto.update)

module.exports = routes