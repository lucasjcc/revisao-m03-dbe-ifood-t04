const express = require('express')
const { listarGastos, listarGasto } = require('./controladores/gastos')
const { atualizarUsuario, cadastrarUsuario, logarUsuario } = require('./controladores/usuarios')
const conferirLogado = require('./intermediarios/conferirLogado')

const rotas = express()

rotas.post('/usuarios', cadastrarUsuario)
rotas.post('/login', logarUsuario)

rotas.use(conferirLogado)

rotas.get('/gastos', listarGastos)
rotas.get('/gastos/:id', listarGasto)
rotas.put('/usuarios', atualizarUsuario)

module.exports = rotas